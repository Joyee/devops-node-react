import { GridContent, PageContainer } from '@ant-design/pro-components';
import { Card, List } from 'antd';
import { Link } from '@umijs/max'

const data = [
  {
    id: 1,
    title: 'Ant Design Title 1',
    content: 'Card content'
  },
  {
    id: 2,
    title: 'Ant Design Title 2',
    content: 'Card content'
  },
  {
    id: 3,
    title: 'Ant Design Title 3',
    content: 'Card content'
  },
  {
    id: 4,
    title: 'Ant Design Title 4',
    content: 'Card content'
  },
  {
    id: 5,
    title: 'Ant Design Title 5',
    content: 'Card content'
  },
  {
    id: 6,
    title: 'Ant Design Title 6',
    content: 'Card content'
  },
];

const Apps = () => {
  return (
    <PageContainer>
      <GridContent content="Fluid">
        <List
          grid={{ gutter: 8, xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 5 }}
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item>
              <Link to={`/app/${item.id}`}><Card title={item.title} hoverable>{item.content}</Card></Link>
            </List.Item>
          )}
        />
      </GridContent>
    </PageContainer>
  );
};

export default Apps;
