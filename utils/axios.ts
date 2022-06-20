import axios from 'axios';

const baseURL: any = process.env.REACT_APP_SERVERIP;

const instance = axios.create(baseURL);

instance.interceptors.request.use(
  function setConfig(parameter) {
    const config = parameter;

    config.headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('42gg-token')}`,
    };
    return config;
  },
  function getError(error) {
    return Promise.reject(error);
  }
);

export default instance;

// export const getData = async (path: string, isServer = false) => {
//   try {
//     const END_POINT = isServer ? SERVER : LOCAL;
//     const res = await axios.get(`${END_POINT}${path}`);
//     if (Math.round(res.status / 200) !== 1) {
//       throw new Error('네트워크 에러');
//     }
//     return await res;
//   } catch (e) {
//     // throw new Error(e);
//   }
// };

// export const postData = async (
//   path: string,
//   body: unknown,
//   isServer = false
// ) => {
//   try {
//     const END_POINT = isServer ? SERVER : LOCAL;
//     const res = await axios.post(`${END_POINT}${path}`, body);
//     if (Math.round(res.status / 200) !== 1) throw new Error('네트워크 에러');
//     return await res;
//   } catch (e) {
//     // throw new Error(e);
//   }
// };

// export const deleteData = async (path: string, isServer = false) => {
//   try {
//     const END_POINT = isServer ? SERVER : LOCAL;
//     const res = await axios.delete(`${END_POINT}${path}`);
//     if (res.statusText !== 'OK') throw new Error('네트워크 에러');
//     return await res;
//   } catch (e) {
//     // throw new Error(e);
//   }
// };
