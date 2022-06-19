import { atom } from 'recoil';
import { v1 } from 'uuid';

export const clickedGameItem = atom<number>({
  key: `clickedGameItem/${v1()}`, // unique ID (경기 컴포넌트의 각 아이템을 구분하기 위해서)
  default: 1, // default value (기본적으로 첫 번째 아이템 값)
});
