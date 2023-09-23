import { Layout, Card, Typography, Form, Row, Col } from 'antd'

type FeedbackType = {
  message: string;
  feedbackType: 'ELOGIO' | 'SUGESTAO' | 'CRITICA';
}

export default function FeedBack() {


  return (
    <main>
      <Layout style={{ width: '100%', height: '100vh' }}>
        <Row>
          <Col span={12} offset={6}>
              <Card style={{marginTop: '30vh' }}>
                <Typography style={{ whiteSpace: 'nowrap' }}>Hello my favourite customer!</Typography>
                <Typography style={{ whiteSpace: 'nowrap' }}>Please, send us a feedback about our website!</Typography>
                <Form
                  name='feedback'
                  style={{ maxWidth: '80vw' }}

                >

                </Form>
              </Card>
          </Col>
        </Row>
      </Layout>
    </main>
  )
}