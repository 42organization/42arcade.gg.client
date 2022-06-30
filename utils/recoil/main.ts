import { atom } from 'recoil';
import { v1 } from 'uuid';
import { UserData, LiveData } from '../../types/mainType';

export const userState = atom<UserData>({
  key: `userState/${v1()}`, // unique ID (다른 atoms/selectors을 구별하기 위해서)
  default: { intraId: '', userImageUri: '' }, // default value (aka initial value)
});

export const liveState = atom<LiveData>({
  key: `liveState/${v1()}`,
  default: { notiCount: 0, event: null },
});
