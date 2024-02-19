import request from '@/utils/request';
import { PageContainer } from '@ant-design/pro-components';
// import { useModel } from '@umijs/max';
import { notification, Spin } from 'antd';
import { useEffect, useState } from 'react';
import { getQueryString } from '../../utils/utils';

const HomePage = () => {
  // const { name } = useModel('global');

  const [isAuthed, setIsAuthed] = useState(0);
  const [loading, setLoading] = useState(false);

  const auth = async () => {
    const code = getQueryString('code');
    if (code) {
      setLoading(true);

      const res = await request('/oauth/redirect', {
        method: 'GET',
        params: { code },
      });

      if (res && res.status === 0) {
        if (res.data.error_description) {
          notification.error({ description: res.data.error_description });
          setIsAuthed(0);
        } else {
          setIsAuthed(1);
        }
      } else {
        setIsAuthed(0);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem('access_token')) {
      auth();
    }
  }, []);

  return (
    <PageContainer
      ghost
      header={{
        title: '工作区',
      }}
    >
      {loading ? <Spin /> : '工作区'}
    </PageContainer>
  );
};

export default HomePage;
