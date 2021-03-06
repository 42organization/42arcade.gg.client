import { useSetRecoilState } from 'recoil';
import { modalState } from 'utils/recoil/modal';
import styles from 'styles/modal/MatchRejectModal.module.scss';

export default function MatchRejectModal() {
  const setModalInfo = useSetRecoilState(modalState);

  const onReturn = () => {
    setModalInfo({ modalName: null });
  };

  return (
    <div className={styles.container}>
      <div className={styles.phrase}>
        <div className={styles.emoji}>๐ค</div>
        <div>์ด๋ฏธ ์์ฝ๋ ๊ฒฝ๊ธฐ๊ฐ ์์ต๋๋ค.</div>
        <div className={styles.subContent}>
          &#9888; ํด๋น ์ฌ๋กฏ์ ๋ฑ๋กํ๊ณ  ์ถ๋ค๋ฉด
          <br />
          ์์ฝ๋์ด ์๋ ๊ฒฝ๊ธฐ๋ฅผ ์ทจ์ํด ์ฃผ์ธ์.
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.positive}>
          <input onClick={onReturn} type='button' value='ํ ์ธ' />
        </div>
      </div>
    </div>
  );
}
