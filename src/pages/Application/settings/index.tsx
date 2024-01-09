import { Card } from 'antd';

export default (props) => {
  return (
    <div className="app-detail-settings-container">
      <Card title={props.title}>设置</Card>
    </div>
  );
};
