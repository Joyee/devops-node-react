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
          component: './home',
        },
      ],
    },

    {
      name: '应用',
      path: '/app',
      component: './apps',
    },
    {
      name: '应用详情',
      path: '/app/:id',
      component: './application',
      hideInMenu: true,
      routes: [
        { name: '', path: '/app/:id', component: './application/baseinfo' },
        { name: '', path: '/app/:id/changes', component: './application/changes' },
        { name: '', path: '/app/:id/publishing', component: './application/publishing' },
        { name: '', path: '/app/:id/publish-history', component: './application/publish-history' },
        { name: '', path: '/app/:id/members', component: './application/members' },
        { name: '', path: '/app/:id/settings', component: './application/settings' },
      ],
    },
    {
      name: '组件',
      path: '/component',
      component: './component',
    },
    {
      name: '工具',
      path: '/tool',
      component: './Tool',
    },
    {
      name: '登录',
      path: '/login',
      component: './login',
      hideInMenu: true,
      menuRender: false,
    },
  ],
  npmClient: 'pnpm',
});
