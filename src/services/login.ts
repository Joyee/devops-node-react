import { request } from '@umijs/max';

export const authGithub = () => {
  return request('https://github.com/login/oauth/authorize', {
    method: 'GET',
    params: {
      client_id: 'Iv1.96f15ab9826562d9',
      redirect_uri: 'http://localhost:8000/app',
    },
  });
};
