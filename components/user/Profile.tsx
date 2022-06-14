import { isEditProfileState, profileInfoState } from '../../utils/recoil/user';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { getData } from '../../utils/axios';

interface ProfileProps {
  userId: string;
}

export default function Profile({ userId }: ProfileProps) {
  const setIsEditProfile = useSetRecoilState(isEditProfileState);
  const [profileInfo, setProfileInfo] = useRecoilState(profileInfoState);

  useEffect(() => {
    (async () => {
      try {
        const res = await getData(`/pingpong/users/${userId}/detail`);
        setProfileInfo(res);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [userId]);

  const {
    userImageUri,
    rank,
    ppp,
    wins,
    loses,
    winRate,
    racketType,
    statusMessage,
  } = profileInfo;

  const onEdit = () => {
    setIsEditProfile(true);
  };

  return (
    <div style={{ border: '1px solid' }}>
      <div>
        <span>rank : {rank} </span>
        <span>userId : {userId} </span>
        <span>{userImageUri}</span>
      </div>
      <div>
        <span>wins : {wins} </span>
        <span>loses : {loses} </span>
        <span>winRate : {winRate} </span>
      </div>
      <div>
        <span>ppp : {ppp} </span>
        <span>racketType : {racketType} </span>
      </div>
      <div>
        <span>상태메세지 : {statusMessage} </span>
      </div>
      <button onClick={onEdit}>수정</button>
    </div>
  );
}