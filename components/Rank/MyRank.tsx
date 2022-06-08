import React from "react";
import styles from "../../styles/RankList.module.css";

type RankType = {
  myRank: number;
};

export default function MyRank({ myRank }: RankType) {
  return (
    <div>
      <div className={styles.myRank}>지금 나의 🏆 랭킹 {myRank}</div>
    </div>
  );
}
