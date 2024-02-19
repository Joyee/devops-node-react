import request from '@/utils/request';
import { history } from 'umi';
// 运行时配置
const loginPath = '/login';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  const fetchUserInfo = async () => {
    try {
      const { data } = await request('/login', { method: 'POST' });
      if (data && data.userInfo) {
        localStorage.setItem('userInfo', JSON.stringify(data.userInfo));
        return {
          name: data.userInfo.username,
          avatar: data.userInfo.avatarUrl,
          userid: data.userInfo.id,
          email: data.userInfo.email,
        };
      }
    } catch (error) {
      history.push(loginPath);
    }
  };

  // 如果是登录页面，不执行
  if (history.location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    return currentUser;
  }
  return {
    name: 'aaa',
  };
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
  };
};
