import { enrollInfoState } from '../../utils/recoil/match';
import { EnrollInfo } from '../../types/matchTypes';
import instance from '../../utils/axios';
import { useRecoilState } from 'recoil';
import { dateToString } from '../../utils/handleTime';

export default function MatchEnrollModal() {
  const [enrollInfo, setEnrollInfo] = useRecoilState<EnrollInfo | null>(
    enrollInfoState
  );

  if (!enrollInfo) return null;

  const { slotId, type, startTime, endTime } = enrollInfo;

  const onEnroll = async () => {
    const body = { slotId };
    const res = await instance.post(
      `/pingpong/match/tables/${1}/${type}`,
      body
    );
    alert(res?.data.message);
    setEnrollInfo(null);
  };

  const onCancel = () => setEnrollInfo(null);

  return (
    <div>
      <div>
        play time : {dateToString(startTime)} - {dateToString(endTime)}
      </div>
      <div>참여하시겠습니까?</div>
      <button onClick={onEnroll}>확인</button>
      <button onClick={onCancel}>취소</button>
    </div>
  );
}
