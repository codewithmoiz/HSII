import React from 'react';
import { ProCard } from '@ant-design/pro-card';
import { Row, Col } from 'antd';

const Dashboard = () => {
  return (
    <ProCard ghost>
      <Row gutter={16}>
        <Col span={8}>
          <ProCard title="Total Students" bordered>
            120
          </ProCard>
        </Col>
        <Col span={8}>
          <ProCard title="New Registrations" bordered>
            15
          </ProCard>
        </Col>
        <Col span={8}>
          <ProCard title="Pending Approvals" bordered>
            5
          </ProCard>
        </Col>
      </Row>
    </ProCard>
  );
};

export default Dashboard;
