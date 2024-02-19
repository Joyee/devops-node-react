import request from '@/utils/request';

export interface LoginParamsType {
  username: string;
  password: string;
  mobile: string;
  captcha: string;
}

export async function fakeAccountLogin(params: LoginParamsType) {
  return request('/user/getUserToken', {
    getResponse: true, // 开启可以拿到返回 header 参数，将对应的 authorization token 存入本地使用
    method: 'POST',
    data: { params },
  });
}
