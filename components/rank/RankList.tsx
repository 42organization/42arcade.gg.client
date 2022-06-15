import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/RankList.module.css';
import { Rank, RankData } from '../../types/rankTypes';
import { getData } from '../../utils/axios';
import { useRecoilState } from 'recoil';
import { myRankPosition, isScrollState } from '../../utils/recoil/myRank';
import RankItem from './RankItem';
import PageNation from '../Pagination';

type RankType = {
  isMain: boolean;
};

export default function RankList({ isMain }: RankType) {
  const [rankData, setRankData] = useState<RankData | null>(null);
  const [myRank, setMyRank] = useRecoilState(myRankPosition);
  const [isScroll, setIsScroll] = useRecoilState(isScrollState);
  const [page, setPage] = useState<number>(1);
  const router = useRouter();
  const path = isMain
    ? `/pingpong/ranks/count/${1}`
    : `/pingpong/ranks/${page}`;

  useEffect(() => {
    if (isScroll) {
      setPage(Math.ceil(myRank / 20));
    }
  }, [isScroll]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getData(`${path}`);
        setRankData(data);
        setMyRank(data.myRank);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [page, isScroll === true]);

  useEffect(() => {
    if (isScroll) {
      window.scrollTo({ top: ((myRank - 1) % 20) * 45, behavior: 'smooth' });
      setIsScroll(false);
    }
  }, [rankData]);

  const pageChangeHandler = (pages: number) => {
    setPage(pages);
    router.push(`rank`);
  };

  return isMain ? (
    <div>
      {rankData?.rankList.map((item: Rank) => (
        <RankItem key={item.userId} user={item} isMain={isMain} />
      ))}
    </div>
  ) : (
    <>
      <div className={styles.title}>Ranking</div>
      <div className={styles.container}>
        <div className={styles.division}>
          <div className={styles.rank}>랭킹</div>
          <div className={styles.userId}>유저 (점수)</div>
          <div className={styles.statusMessage}>상태메시지</div>
          <div className={styles.winRate}>승률</div>
        </div>
        {rankData?.rankList.map((item: Rank) => (
          <RankItem key={item.userId} user={item} isMain={isMain} />
        ))}
        <PageNation
          curPage={rankData?.currentPage!}
          totalPages={rankData?.totalPage!}
          pageChangeHandler={pageChangeHandler}
        />
      </div>
    </>
  );
}
