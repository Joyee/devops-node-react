import request from '@/utils/request';
import { PlusOutlined } from '@ant-design/icons';
import type { ProFormInstance } from '@ant-design/pro-components';
import {
  GridContent,
  ModalForm,
  PageContainer,
  ProForm,
  ProFormRadio,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { Link } from '@umijs/max';
import { App, Button, Card, Input, List, Space } from 'antd';
import { useRef } from 'react';

const data = [
  {
    id: 1,
    title: 'Ant Design Title 1',
    content: 'Card content',
  },
  {
    id: 2,
    title: 'Ant Design Title 2',
    content: 'Card content',
  },
  {
    id: 3,
    title: 'Ant Design Title 3',
    content: 'Card content',
  },
  {
    id: 4,
    title: 'Ant Design Title 4',
    content: 'Card content',
  },
  {
    id: 5,
    title: 'Ant Design Title 5',
    content: 'Card content',
  },
  {
    id: 6,
    title: 'Ant Design Title 6',
    content: 'Card content',
  },
];

type AppForm = {
  appCode: string;
  appType: string;
  name: string;
  desc: string;
  gitUrl: string;
  createGitRepo: boolean;
};

const AddButton = () => {
  const formRef = useRef<ProFormInstance<AppForm>>();

  return (
    <ModalForm<AppForm>
      title="创建应用"
      trigger={
        <Button type="primary">
          <PlusOutlined />
          创建应用
        </Button>
      }
      // form={form}
      initialValues={{ appType: 0 }}
      formRef={formRef}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      autoFocusFirstInput
      modalProps={{
        destroyOnClose: true,
        onCancel: () => console.log('run'),
      }}
      submitTimeout={2000}
      onFinish={async (values) => {
        const val1 = await formRef.current?.validateFields();
        console.log('validateFields:', val1);
        // const val2 = await formRef.current?.validateFieldsReturnFormatValue?.();
        // console.log('validateFieldsReturnFormatValue:', val2);
        // message.success('提交成功');
        const res = await request('/add', {
          method: 'POST',
          data: {
            ...val1,
          },
        });
        return false;
      }}
    >
      <ProFormText
        width="md"
        name="appCode"
        label="AppCode"
        placeholder="输入应用名称"
        required
        rules={[{ required: true, message: '这是必填项' }]}
      />
      <ProFormRadio.Group
        label="应用类型"
        name="appType"
        options={['PC', 'H5']}
        required
      />
      <ProFormRadio.Group
        label="仓库类型"
        name="createGitRepo"
        options={[
          { label: '创建仓库', value: true },
          { label: '关联仓库', value: false },
        ]}
        required
      />
      <ProForm.Item label="仓库地址" name="gitUrl">
        <Space direction="vertical">
          <Input
            addonBefore="git@github.com:Joyee/"
            addonAfter=".git"
            defaultValue=""
          />
        </Space>
      </ProForm.Item>
      <ProFormText width="md" name="name" label="名称" placeholder="名称" />
      <ProFormTextArea width="xl" label="描述" name="desc" />
    </ModalForm>
  );
};

const Apps = () => {
  return (
    <App>
      <PageContainer
        header={{
          title: '应用',
          ghost: true,
          extra: [<AddButton key="1"></AddButton>],
        }}
      >
        <GridContent content="Fluid">
          <List
            grid={{ gutter: 8, xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 5 }}
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <Link to={`/app/${item.id}`}>
                  <Card title={item.title} hoverable>
                    {item.content}
                  </Card>
                </Link>
              </List.Item>
            )}
          />
        </GridContent>
      </PageContainer>
    </App>
  );
};

export default Apps;
