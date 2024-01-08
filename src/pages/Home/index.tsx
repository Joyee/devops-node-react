import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';

const HomePage = () => {
  const { name } = useModel('global');
  return (
    <PageContainer
      ghost
      header={{
        title: '工作区',
      }}
    >
      工作区
    </PageContainer>
  );
};

export default HomePage;
