import styles from 'styles/game/GameResultEmpty.module.scss';

export default function GameResultEmptyArray() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Record</div>
      <div className={styles.emoji}>π€</div>
      <div>κ²μ κ²°κ³Όκ° μμ΅λλ€.</div>
    </div>
  );
}
