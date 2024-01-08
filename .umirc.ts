import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'Devops',
  },
  routes: [
    {
      name: '工作区',
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          name: '',
          path: '',
          component: './Home'
        },
      ],
    },

    {
      name: '应用',
      path: '/app',
      component: './App',
    },
    {
      name: '应用详情',
      path: '/app/Application',
      component: './Application',
      hideInMenu: true,
    },
    {
      name: '组件',
      path: '/component',
      component: './Component',
    },
    {
      name: '工具',
      path: '/tool',
      component: './Tool',
    },
    {
      name: '登录',
      path: '/login',
      component: './Login',
      hideInMenu: true,
      menuRender: false,
    },
  ],
  npmClient: 'pnpm',
});
