import React from 'react';
import { Typography, Card } from 'antd';

const { Title } = Typography;

const StorePage: React.FC = () => {
  return (
    <div className="store-page">
      <Title level={2}>无人机商城</Title>
      <Card>
        <p>无人机商城页面正在开发中...</p>
      </Card>
    </div>
  );
};

export default StorePage; 