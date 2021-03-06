import styles from 'styles/game/GameResultItem.module.scss';

interface GameResultTypes {
  status: string;
  time: string;
  scoreTeam1: number;
  scoreTeam2: number;
}

interface ScoreViewProviderProps {
  status: string;
  time: string;
}

export default function GameResultBigScore({
  status,
  time,
  scoreTeam1,
  scoreTeam2,
}: GameResultTypes) {
  return (
    <div className={styles.bigScoreBoard}>
      <ScoreViewProvider status={status} time={time} />
      <div className={styles.gameScore}>{`${scoreTeam1} : ${scoreTeam2}`}</div>
    </div>
  );
}

function ScoreViewProvider({ status, time }: ScoreViewProviderProps) {
  if (status === 'live')
    return <div className={styles.gameStatusLive}>Live</div>;
  else if (status === 'wait')
    return (
      <div className={styles.gameStatusWait}>
        <span className={styles.span1}>o</span>
        <span className={styles.span2}>o</span>
        <span className={styles.span3}>o</span>
      </div>
    );
  else if (status === 'end')
    return <div className={styles.gameStatusEnd}>{getTimeAgo(time)}</div>;
  else return null;
}

function getElapsedTimeSeconds(gameTime: string) {
  return (Number(new Date()) - Number(new Date(gameTime))) / 1000;
}

function getTimeAgo(gameTime: string) {
  const elapsedTimeSeconds = getElapsedTimeSeconds(gameTime) - 60 * 10;
  const timeUnits = [
    { unit: '년', second: 60 * 60 * 24 * 365 },
    { unit: '개월', second: 60 * 60 * 24 * 30 },
    { unit: '일', second: 60 * 60 * 24 },
    { unit: '시간', second: 60 * 60 },
    { unit: '분', second: 60 },
  ];

  for (const timeUnit of timeUnits) {
    const elapsedTime = Math.floor(elapsedTimeSeconds / timeUnit.second);

    if (elapsedTime > 0) {
      return `${elapsedTime}${timeUnit.unit} 전`;
    }
  }
  return '방금 전';
}
