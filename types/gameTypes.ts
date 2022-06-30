export interface Player {
  intraId: string;
  userImageUri: string;
  wins: number;
  losses: number;
  winRate: number;
  pppChange: number;
}

export interface Team {
  players: Player[];
  isWin: boolean;
  score: number;
}

export interface Game {
  gameId: number;
  team1: Team;
  team2: Team;
  type: string;
  status: string;
  time: string;
}
