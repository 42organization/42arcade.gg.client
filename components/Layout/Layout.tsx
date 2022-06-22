import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userState, liveState } from '../../utils/recoil/main';
import { UserData, LiveData } from '../../types/mainType';
import InputScoreModal from '../score/InputScoreModal';
import CurrentMatchInfo from '../match/CurrentMatchInfo';
import Header from './Header';
import Footer from './Footer';
import instance from '../../utils/axios';
import { RiPingPongFill } from 'react-icons/ri';
import Login from '../../pages/login';
import { loginState } from '../../utils/recoil/login';
import styles from '../../styles/Layout.module.scss';

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  const [userData, setUserData] = useRecoilState<UserData>(userState);
  const [liveData, setLiveData] = useRecoilState<LiveData>(liveState);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const presentPath = useRouter().asPath;
  const router = useRouter();
  const token = router.asPath.split('?token=')[1];

  useEffect(() => {
    if (token) localStorage.setItem('42gg-token', token);
    if (localStorage.getItem('42gg-token')) setIsLoggedIn(true);
  }, []);

  useEffect(() => {
    if (router.asPath.includes('token')) {
      router.push(`/`);
    }
  }, [token]);

  useEffect(() => {
    (async () => {
      try {
        const res = await instance.get(`/pingpong/users`);
        setUserData(res?.data);
        getLiveDataHandler(res?.data.userId);
      } catch (e) {}
    })();
  }, []);

  useEffect(() => {
    getLiveDataHandler(userData.userId);
  }, [presentPath]);

  const getLiveDataHandler = async (userId: string) => {
    if (userId !== '') {
      try {
        const res = await instance.get(`/pingpong/users/${userId}/live`);
        setLiveData(res?.data);
      } catch (e) {}
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <div className={styles.layoutContainer}>
          {/* <Image
            id={styles.background}
            width='100vw'
            height='100vh'
            src='/../../public/background_img.png'
            alt='background'
          /> */}
          <div className={styles.mainContent}>
            <Header />
            {/* 목업 서버에 항상 gameId를 갖고 있어 서버 연결 후 주석 해제 예정 */}
            {/* {liveData.gameId && <InputScoreModal gameId={liveData.gameId} />} */}
            {/* {liveData.event === 'match' && <CurrentMatchInfo />} */}
            {presentPath !== '/match' && (
              <Link href='/match'>
                <a className='matchingButton'>
                  <RiPingPongFill />
                </a>
              </Link>
            )}
            {children}
            <Footer />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}
