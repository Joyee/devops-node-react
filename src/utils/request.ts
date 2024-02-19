import { notification } from 'antd';
import type { RequestConfig } from 'umi';
import { extend } from 'umi-request';

const codeMessage = {
  500: '系统异常',
  404: '请求无效',
  403: '请求403',
};

/**
 * 异常处理程序
 */
const errorHandler = (error: { response: Response }): Response => {
  const { response } = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;

    if (response.status === 401) {
      window.location.href = '/user/login';
    }
    notification.error({
      message: `请求错误 ${status}: ${url}`,
      description: errorText,
    });
  } else if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
  }
  return response;
};

/**
 * 配置request请求时的默认参数
 */
const request: RequestConfig = extend({
  prefix: 'http://127.0.0.1:5000/api',
  errorHandler, // 默认错误处理
  // credentials: 'include', // 默认请求是否带上cookie
  headers: {
    authorization: localStorage.getItem('access_token') || '', // 读取本地保存的 authorization token
    'Access-Control-Allow-Origin': '*',
  },
  responseInterceptors: [
    // 直接写一个 function，作为拦截器
    (response) => {
      // 不再需要异步处理读取返回体内容，可直接在data中读出，部分字段可在 config 中找到
      const { data = {} as any, config } = response;
      // do something
      return response;
    },
    // 一个二元组，第一个元素是 request 拦截器，第二个元素是错误处理
    [
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      },
    ],
    // 数组，省略错误处理
    [
      (response) => {
        return response;
      },
    ],
  ],
  requestInterceptors: [
    (config) => {
      return config;
    },
  ],
});

export default request;
