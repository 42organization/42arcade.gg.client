import { useSetRecoilState, useRecoilValue } from 'recoil';
import { myRankPosition, isScrollState } from 'utils/recoil/myRank';
import styles from 'styles/RankList.module.scss';

export default function MyRank() {
  const myRank = useRecoilValue(myRankPosition);
  const setIsScroll = useSetRecoilState(isScrollState);

  const onClick = () => {
    setIsScroll(true);
  };

  return (
    <div>
      {myRank && (
        <div className={styles.myRank}>
          {myRank === -1 ? (
            <span>π‘ λμ μμκ° μ ν΄μ§μ§ μμμ΅λλ€ π‘</span>
          ) : (
            <div>
              ππ <span onClick={onClick}>λμ μμ {myRank}μ </span>
              λ°λ‘κ°κΈ° ππ
            </div>
          )}
        </div>
      )}
    </div>
  );
}
