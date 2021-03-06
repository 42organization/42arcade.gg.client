import { useSetRecoilState } from 'recoil';
import { Game } from 'types/gameTypes';
import { clickedGameItem } from 'utils/recoil/game';
import GameResultBigScore from 'components/game/big/GameResultBigScore';
import GameResultSmallScore from 'components/game/small/GameResultSmallScore';
import GameResultBigTeam from 'components/game/big/GameResultBigTeam';
import GameResultSmallTeam from 'components/game/small/GameResultSmallTeam';
import styles from 'styles/game/GameResultItem.module.scss';

type gameResultTypes = {
  game: Game;
  big: boolean;
};

export default function GameResultItem({ game, big }: gameResultTypes) {
  const { team1, team2, status, time, gameId } = game;
  const setClickedItemId = useSetRecoilState<number>(clickedGameItem);

  return <>{big ? <BigItem /> : <SmallItem />}</>;

  function SmallItem() {
    return (
      <div
        className={styles.smallContainer}
        onClick={() => setClickedItemId(gameId)}
      >
        <GameResultSmallTeam team={team1} userLeft={true} />
        <GameResultSmallScore
          scoreTeam1={team1.score}
          scoreTeam2={team2.score}
        />
        <GameResultSmallTeam team={team2} userLeft={false} />
      </div>
    );
  }

  function BigItem() {
    return (
      <div
        className={styles.bigContainer}
        onClick={() => setClickedItemId(gameId)}
      >
        <GameResultBigTeam team={team1} />
        <GameResultBigScore
          status={status}
          time={time}
          scoreTeam1={team1.score}
          scoreTeam2={team2.score}
        />
        <GameResultBigTeam team={team2} />
      </div>
    );
  }
}
