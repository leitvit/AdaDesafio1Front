'use client'

import { Layout, Card, Typography, Form, Row, Col, Button, Input, Select } from 'antd'
import feedbackApi, { Feedback } from '@/api/feedbackApi';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values: Feedback) => {
  try {
    // Faça a chamada à API REST aqui
    const response = feedbackApi.postFeedback(values);

    console.log(response);

  } catch (error) {
    console.error('Erro ao chamar a API:', error);
  }
};

export default function FeedBack() {


  return (
    <main>
      <Layout style={{ width: '100%', height: '100vh' }}>
        <Row>
          <Col span={12} offset={6}>
            <Card style={{ marginTop: '30vh' }}>
              <Typography style={{ whiteSpace: 'nowrap' }}>Hello my favourite customer!</Typography>
              <Typography style={{ whiteSpace: 'nowrap' }}>Please, send us a feedback about our website!</Typography>

              <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                style={{ maxWidth: 700, marginTop: '5vh' }}
                validateMessages={validateMessages}
              >

                <Form.Item<Feedback> name="message" label="Message" rules={[{ required: true }]}>
                  <Input.TextArea />
                </Form.Item>
                <Form.Item<Feedback> name="feedbackType" label="Feedback" rules={[{ required: true }]}>
                  <Select>
                    <Select.Option value="ELOGIO">ELOGIO</Select.Option>
                    <Select.Option value="SUGESTAO">SUGESTAO</Select.Option>
                    <Select.Option value="CRITICA">CRITICA</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                  <Button type="primary" htmlType="submit">
                    Send
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </Layout>
    </main>
  )
}
