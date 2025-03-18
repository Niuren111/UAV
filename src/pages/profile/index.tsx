import React from 'react';
import { Typography, Card } from 'antd';

const { Title } = Typography;

const ProfilePage: React.FC = () => {
  return (
    <div className="profile-page">
      <Title level={2}>个人中心</Title>
      <Card>
        <p>个人中心页面正在开发中...</p>
      </Card>
    </div>
  );
};

export default ProfilePage; 