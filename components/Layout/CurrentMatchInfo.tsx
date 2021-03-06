import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { matchRefreshBtnState, currentMatchInfo } from 'utils/recoil/match';
import { liveState } from 'utils/recoil/layout';
import { errorState } from 'utils/recoil/error';
import { modalState } from 'utils/recoil/modal';
import { gameTimeToString, isBeforeMin } from 'utils/handleTime';
import instance from 'utils/axios';
import styles from 'styles/Layout/CurrentMatchInfo.module.scss';

export default function CurrentMatchInfo() {
  const [currentMatch, setCurrentMatch] = useRecoilState(currentMatchInfo);
  const { isMatched, enemyTeam, time, slotId } = currentMatch;
  const [enemyTeamInfo, setEnemyTeamInfo] = useState(<></>);
  const [matchRefreshBtn, setMatchRefreshBtn] =
    useRecoilState(matchRefreshBtnState);
  const setModalInfo = useSetRecoilState(modalState);
  const setErrorMessage = useSetRecoilState(errorState);
  const setLiveData = useSetRecoilState(liveState);
  const matchingMessage = time && makeMessage(time, isMatched);
  const isblockCancelBtn = isBeforeMin(time, 5) && enemyTeam.length;
  const presentPath = useRouter().asPath;

  useEffect(() => {
    getCurrentMatchHandler();
  }, []);

  useEffect(() => {
    setModalInfo({ modalName: null });
  }, [presentPath]);

  useEffect(() => {
    getCurrentMatchHandler();
    if (matchRefreshBtn && isBeforeMin(time, 0)) {
      setLiveData((prev) => ({ ...prev, event: 'game' }));
    }
  }, [presentPath, matchRefreshBtn]);

  const getCurrentMatchHandler = async () => {
    try {
      const res = await instance.get(`/pingpong/match/current`);
      setCurrentMatch(res?.data);
      if (isBeforeMin(res?.data.time, 5)) {
        setEnemyTeamInfo(makeEnemyTeamInfo(res?.data.enemyTeam));
      }
      if (matchRefreshBtn) setMatchRefreshBtn(false);
    } catch (e) {
      setErrorMessage('JB01');
    }
  };

  const onCancel = () => {
    setModalInfo({
      modalName: 'MATCH-CANCEL',
      cancelInfo: { slotId, time, enemyTeam },
    });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.stringWrapper}>
          <div className={styles.icon}> ??? </div>
          <div className={styles.messageWrapper}>
            {matchingMessage}
            {enemyTeam.length ? enemyTeamInfo : null}
          </div>
        </div>
        <div
          className={
            isblockCancelBtn ? styles.blockCancelButton : styles.cancelButton
          }
        >
          <input
            type='button'
            onClick={onCancel}
            value={isblockCancelBtn ? '????????????' : '????????????'}
          />
        </div>
      </div>
    </>
  );
}

function makeMessage(time: string, isMatched: boolean) {
  const formattedTime = gameTimeToString(time);
  return (
    <div className={styles.messageString}>
      <span>{formattedTime}</span>
      <span>
        {isMatched ? (
          '??? ????????? ???????????????!'
        ) : (
          <>
            <span> ????????? ???????????? ???</span>
            <span className={styles.waitUpDown}>
              <span className={styles.span1}>.</span>
              <span className={styles.span2}>.</span>
              <span className={styles.span3}>.</span>
            </span>
          </>
        )}
      </span>
    </div>
  );
}

function makeEnemyTeamInfo(enemyTeam: string[]) {
  const enemyUsers = enemyTeam.map((intraId: string, i: number) => (
    <span key={intraId} id={styles.enemyUsers}>
      <Link href={`/users/detail?intraId=${intraId}`}>{intraId}</Link>
      {i < enemyTeam.length - 1 ? ', ' : ''}
    </span>
  ));
  return <div className={styles.enemyTeamString}> ????????? : {enemyUsers}</div>;
}
