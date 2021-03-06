import { useSetRecoilState } from 'recoil';
import { modalState } from 'utils/recoil/modal';
import styles from 'styles/modal/WelcomeModal.module.scss';

export default function WelcomeModal() {
  const setModalInfo = useSetRecoilState(modalState);

  const openPageManual = () => {
    window.open(
      'https://github.com/42organization/42arcade.gg.client/wiki/42gg.kr--%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B0%80%EC%9D%B4%EB%93%9C'
    );
  };

  const closeModalHandler = () => {
    setModalInfo({ modalName: null });
  };

  return (
    <div className={styles.container}>
      <div className={styles.phrase}>
        <div className={styles.emoji}></div>
        <div className={styles.title}>Welcome</div>
        <div>
          42GG에 오신걸 환영합니다.
          <br />
          당신의 행복한 탁구 생활을
          <br />
          응원합니다! 총총총...
        </div>
        <div className={styles.rose}>
          <span>{`@`}</span>
          <span>{`)->->--`}</span>
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.negative}>
          <input onClick={openPageManual} type='button' value='페이지 소개' />
        </div>
        <div className={styles.positive}>
          <input onClick={closeModalHandler} type='button' value='홈으로' />
        </div>
      </div>
    </div>
  );
}
