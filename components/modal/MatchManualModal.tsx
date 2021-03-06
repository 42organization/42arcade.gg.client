import { useSetRecoilState } from 'recoil';
import { modalState } from 'utils/recoil/modal';
import styles from 'styles/modal/MatchManualModal.module.scss';

export default function MatchManualModal() {
  const setModalInfo = useSetRecoilState(modalState);

  const onReturn = () => {
    setModalInfo({ modalName: null });
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Please!!</div>
      <ul className={styles.ruleList}>
        <li>
          ๐ ๋งค์นญ
          <ul className={styles.ruleDetail}>
            <li>๋ฑ๋กํ ๊ฒฝ๊ธฐ๊ฐ ๋๋์ผ๋ง ๋ค์ ๊ฒฝ๊ธฐ ๋ฑ๋ก ๊ฐ๋ฅ</li>
            <li>๊ฒฝ๊ธฐ ์์ 5๋ถ ์  ์๋ ํ ๊ณต๊ฐ ๋ฐ ๊ฒฝ๊ธฐ ์ทจ์ ๋ถ๊ฐ</li>
            <li>๋งค์นญ ์๋ฆผ์ ์ด๋ฉ์ผ๋ก ์ ๋ฌ</li>
            <li>์ผ์  ์ ์ ์ด์ ์ฐจ์ด ๋๋ ์๋์ ๋งค์นญ ๋ถ๊ฐ</li>
            <li>๊ฒฝ๊ธฐ๊ฐ ๋งค์นญ๋ ์ํ์์ ์ทจ์ ์, 1๋ถ๊ฐ ๊ฒฝ๊ธฐ ๋ฑ๋ก ๋ถ๊ฐ</li>
            <li>์๋๋ฐฉ์ด ๊ฒฝ๊ธฐ๋ฅผ ์ทจ์ํ๋ฉด ๋์ ๊ฒฝ๊ธฐ๋ ๋งค์นญ ๋๊ธฐ ์ํ๋ก ์ ํ </li>
          </ul>
        </li>
        <li>
          ๐ ๊ฒฝ๊ธฐ
          <ul className={styles.ruleDetail}>
            <li>11์  3ํ 2์ ์น์ </li>
            <li>๊ฒฝ๊ธฐ๋ 10๋ถ ๋์ ์งํ</li>
            <li>์ ์๊ฐ 10:10 ์ธ ๊ฒฝ์ฐ ๋์ค</li>
            <li>๋์ค์ธ ๊ฒฝ์ฐ, 2์  ์ฐจ๊ฐ ๋๋ฉด ๊ฒฝ๊ธฐ ์ข๋ฃ</li>
            <li>ํ๊ตฌ์ฑ๋ฅผ ์ก์ง ์์ ์์ผ๋ก ํ๊ตฌ๋๋ฅผ ์ง์ผ๋ฉด ์ค์ </li>
            <li>ํ๊ตฌ๋ ๋ฐ ๋คํธ๊ฐ ์๋ ๊ณณ์ ๊ณต์ด ๋ง์ ์ ์ค์ </li>
          </ul>
        </li>
        <li>
          ๐ ์๋ธ
          <ul className={styles.ruleDetail}>
            <li>์ฒซ ์ธํธ๋ง ์๋ธ ๊ฒ์ ์งํ</li>
            <li>์๋ธ ๊ฒ์ ์น์๋ถํฐ ์ธํธ๋ณ ๊ต๋๋ก ์๋ธ</li>
            <li>์๋ธ๋ 2์ ๋ง๋ค ๊ต๋ํ๋ฉฐ, ๋์ค์ผ ๋๋ 1์ ๋ง๋ค ๊ต๋</li>
            <li>์๋ธ ์์ ์ ์๋๋ฐฉ์๊ฒ ์ ํธ (e.g. ์๋ธํ๊ฒ ์ต๋๋ค.)</li>
            <li>์๋ธ ์ ๊ณต์ด ๋คํธ์ ๋ง๊ณ  ๋์ด๊ฐ๋ฉด ๋ค์ ์๋ธ</li>
          </ul>
        </li>
        <li>
          โ ๊ฒฝ๊ธฐ ๊ฒฐ๊ณผ
          <ul className={styles.ruleDetail}>
            <li>๊ฒฝ๊ธฐ ์ข๋ฃ ํ ๊ทธ ์๋ฆฌ์์ ์ธํธ ์ ์ ์๋ ฅ</li>
            <li>๋ค์ ๊ฒฝ๊ธฐ๊ฐ ์์ ์ ํ์ฌ ์ค์ฝ์ด๊ฐ ๋์ ์ ์๊ฐ ์น๋ฆฌ</li>
            <li>๋ค์ ๊ฒฝ๊ธฐ๊ฐ ์์ ์ ๊ณ์ ์งํ</li>
          </ul>
        </li>
        <li>
          ๐จ ๊ฒฝ๊ธฐ ์ ์ฃผ์์ฌํญ
          <ul className={styles.ruleDetail}>
            <li>
              ๋งค์น๊ฐ ์์ ๋์์ผ๋ ์๋๋ฐฉ์ด ๋์ค์ง ์๋๋ค๋ฉด 3๋ถ์ด ์ง๋  ๋ ๋ง๋ค
              ์ธํธ ์ ์ 1์ ์ฉ ํ๋
            </li>
            <li>6๋ถ์ด ์ง๋ฌ์ ๋๋ ๋์ค์ง ์์๋ค๋ฉด ์ธํธ ์ ์ 2:0 ์น๋ฆฌ ์ฒ๋ฆฌ</li>
          </ul>
        </li>
      </ul>
      <div className={styles.buttons}>
        <div className={styles.positive}>
          <input onClick={onReturn} type='button' value={'ํ ์ธ'} />
        </div>
      </div>
    </div>
  );
}
