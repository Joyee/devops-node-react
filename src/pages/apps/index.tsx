import { PlusOutlined } from '@ant-design/icons';
import {
  GridContent,
  ModalForm,
  PageContainer,
  ProForm,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { Link } from '@umijs/max';
import { Button, Card, List, message, Form } from 'antd';

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

const AddButton = () => {
  const [form] = Form.useForm<{ name: string; company: string }>();

  const waitTime = (time: number = 100) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };

  return (
    <ModalForm<{
      name: string;
      company: string;
    }>
      title="创建应用"
      trigger={
        <Button type="primary">
          <PlusOutlined />
          创建应用
        </Button>
      }
      form={form}
      layout="horizontal"
      autoFocusFirstInput
      modalProps={{
        destroyOnClose: true,
        onCancel: () => console.log('run'),
      }}
      submitTimeout={2000}
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values.name);
        message.success('提交成功');
        return true;
      }}
    >
      <ProForm.Group>
        <ProFormText
          width="md"
          name="name"
          label="任务名称"
          placeholder="版本名称"
          required
        />

        <ProFormText
          width="md"
          name="company"
          label="我方公司名称"
          placeholder="请输入名称"
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          width="md"
          name="contract"
          label="合同名称"
          placeholder="请输入名称"
        />
        <ProFormDateRangePicker name="contractTime" label="合同生效时间" />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormSelect
          request={async () => [
            {
              value: 'chapter',
              label: '盖章后生效',
            },
          ]}
          width="xs"
          name="useMode"
          label="合同约定生效方式"
        />
        <ProFormSelect
          width="xs"
          options={[
            {
              value: 'time',
              label: '履行完终止',
            },
          ]}
          name="unusedMode"
          label="合同约定失效效方式"
        />
      </ProForm.Group>
      <ProFormText width="sm" name="id" label="主合同编号" />
      <ProFormText
        name="project"
        disabled
        label="项目名称"
        initialValue="xxxx项目"
      />
      <ProFormText
        width="xs"
        name="mangerName"
        disabled
        label="商务经理"
        initialValue="启途"
      />
    </ModalForm>
  );
};

const Apps = () => {
  return (
    <PageContainer
      header={{
        title: '应用',
        ghost: true,
        extra: [<AddButton></AddButton>],
      }}
    >
      <GridContent content="Fluid">
        <List
          grid={{ gutter: 8, xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 5 }}
          dataSource={data}
          renderItem={(item, index) => (
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
  );
};

export default Apps;
