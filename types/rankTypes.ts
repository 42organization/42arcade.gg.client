export interface Rank {
  rank: number;
  userId: string;
  ppp: number;
  statusMessage: string;
  winRate: number;
}

export interface RankData {
  myRank: number;
  rankList: Rank[];
}
