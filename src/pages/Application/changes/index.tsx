import {
  ModalForm,
  ProForm,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { Button, Form, message } from 'antd';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default () => {
  const [form] = Form.useForm<{
    appName: string;
    taskName: string;
    source: string;
    version: string;
    remark: string;
  }>();
  return (
    <ModalForm<{
      appName: string;
      taskName: string;
      source: string;
      version: string;
      remark: string;
    }>
      width={640}
      title="创建变更"
      trigger={<Button type="primary">创建变更</Button>}
      form={form}
      layout="horizontal"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
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
      <ProForm.Item label="所属应用">
        <span className="ant-form-text">{form.appName}</span>
      </ProForm.Item>
      <ProFormText
        colProps={{ span: 24 }}
        name="taskName"
        label="任务名称"
        placeholder="请输入任务名称"
        required
      />
      <ProFormSelect
        colProps={{ xl: 8, md: 18 }}
        label="版本来源"
        name="source"
        valueEnum={{
          1: 'master',
          2: 'dev',
          3: 'uat',
        }}
        required
      />
      <ProFormText name="version" label="版本号" required />
      <ProFormTextArea colProps={{ span: 24 }} name="remark" label="备注" />
    </ModalForm>
  );
};
