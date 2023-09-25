'use client'

import queueApi, { MessageInfoResponse } from "@/api/queueApi";
import { Card, Col, Layout, Row, Select, Typography } from "antd"
import React, { useEffect, useState } from "react";

export default function Queue() {

  const [queueSize, setQueueSize] = useState<any>(undefined);
  const [queueInfo, setQueueInfo] = useState<MessageInfoResponse[] | undefined>(undefined);
  const [type, setType] = useState<any | undefined>(undefined);

  const handleTypeChange = (e: Event) => {
    setType(e);
  }

  useEffect(() => {
    if (!!type) {
      let size = queueApi.getApproxQueueSize({ feedbackType: type });
      size.then((response) => setQueueSize(response.data));
    }
  }, [type]);

  useEffect(() => {
    if (queueSize?.queueApproxSize > 0) {
      let info = queueApi.getQueueInfo({ feedbackType: 'ELOGIO' });
      info.then((response) => {
        const { allMessagesAttributes } = response;
        setQueueInfo(allMessagesAttributes)
      });
    }
  }, [queueSize])

  return (
    <main>
      <Layout style={{ width: '100%', height: '100vh' }}>
        <Row>
          <Col span={12} offset={6}>
            <Card style={{ marginTop: '30vh' }}>
              <Typography style={{ whiteSpace: 'nowrap' }}>Hello my favourite worker!</Typography>
              <Typography style={{ whiteSpace: 'nowrap' }}>Select your queue to see their info!</Typography>
              <Select onChange={handleTypeChange} style={{ width: '20rem' }}>
                <Select.Option value="ELOGIO">ELOGIO</Select.Option>
                <Select.Option value="SUGESTAO">SUGESTAO</Select.Option>
                <Select.Option value="CRITICA">CRITICA</Select.Option>
              </Select>
              {!!queueSize && <Typography style={{ whiteSpace: 'nowrap', marginTop: '1rem' }}>
                {`Queue size is ${queueSize?.queueApproxSize}!`}
              </Typography>}
              <Card style={{ marginTop: '5rem' }}>
                <Typography style={{ whiteSpace: 'nowrap' }}>
                  Queue info:
                </Typography>
                <hr />
                {queueInfo?.map((info, idx) => {
                  return <React.Fragment key={idx + info.messageId}>
                    <Typography>{`message: ${idx}`}</Typography>
                    <Typography>{JSON.stringify(info)}</Typography>
                    <hr/>
                  </React.Fragment>
                })
                }
              </Card>
            </Card>
          </Col>
        </Row>
      </Layout>
    </main>
  );
}