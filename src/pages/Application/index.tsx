import { PageContainer } from '@ant-design/pro-components';
import { Outlet, history, useLocation, useParams } from '@umijs/max';
import { useEffect, useState } from 'react';

export default function Application() {
  const params = useParams();
  const { pathname } = useLocation();

  const tabList = [
    {
      tab: '基本信息',
      key: '/app/' + params.id,
    },
    {
      tab: '变更列表',
      key: 'changes',
    },
    {
      tab: '变更发布',
      key: 'publishing',
    },
    {
      tab: '变更历史',
      key: 'publish-history',
    },
    {
      tab: '变更成员',
      key: 'members',
    },
    {
      tab: '变更设置',
      key: 'settings',
    },
  ];

  const [tabActiveKey, setTabActiveKey] = useState();
  const _initKey = pathname.replace(`/app/${params.id}/`, '');

  useEffect(() => {
    setTabActiveKey(_initKey || 'baseinfo');
  }, [tabActiveKey]);

  const handleTabChange = (key: string) => {
    setTabActiveKey(key);
    const url = pathname.replace(`/${params?.id}`, '');

    switch (key) {
      case 'changes':
        history.push(`/app/${params.id}/changes`);
        break;
      case 'publishing':
        history.push(`/app/${params.id}/publishing`);
        break;
      case 'publish-history':
        history.push(`/app/${params.id}/publish-history`);
        break;
      case 'members':
        history.push(`/app/${params.id}/members`);
        break;
      case 'settings':
        history.push(`/app/${params.id}/settings`);
        break;
      default:
        history.push(`/app/${params.id}`);
        break;
    }
  };
  return (
    <PageContainer
      tabList={tabList}
      tabActiveKey={tabActiveKey}
      onTabChange={handleTabChange}
    >
      <div className="app-detail-container">
        <div className={`app-detail-${tabActiveKey}-container`}>
          <Outlet />
        </div>
      </div>
    </PageContainer>
  );
}
