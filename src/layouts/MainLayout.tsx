import { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { Layout, Menu, Button, Dropdown, Avatar, Input, Badge, Drawer } from 'antd';
import {
  HomeOutlined,
  CarOutlined,
  BookOutlined,
  RocketOutlined,
  ShoppingOutlined,
  UserOutlined,
  MenuOutlined,
  BellOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import logo from '../assets/logo.png';
import './MainLayout.css';

const { Header, Content, Footer } = Layout;
const { Search } = Input;

const MainLayout = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn } = useSelector((state: RootState) => state.user);

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: '首页',
    },
    {
      key: '/transport',
      icon: <CarOutlined />,
      label: '运输服务',
    },
    {
      key: '/training',
      icon: <BookOutlined />,
      label: '培训机构',
    },
    {
      key: '/low-altitude',
      icon: <RocketOutlined />,
      label: '低空空乘',
    },
    {
      key: '/store',
      icon: <ShoppingOutlined />,
      label: '无人机商城',
    },
  ];

  const userMenuItems = [
    {
      key: '1',
      label: <Link to="/profile">个人中心</Link>,
    },
    {
      key: '2',
      label: <Link to="/profile/orders">我的订单</Link>,
    },
    {
      key: '3',
      label: <Link to="/profile/settings">账号设置</Link>,
    },
    {
      key: '4',
      label: <span>退出登录</span>,
    },
  ];

  const handleMenuClick = (e: { key: string }) => {
    navigate(e.key);
    setMobileMenuVisible(false);
  };

  const renderMobileMenu = () => (
    <Drawer
      title="菜单"
      placement="left"
      onClose={() => setMobileMenuVisible(false)}
      open={mobileMenuVisible}
    >
      <Menu
        mode="vertical"
        selectedKeys={[location.pathname]}
        items={menuItems}
        onClick={handleMenuClick}
      />
    </Drawer>
  );

  return (
    <Layout className="layout">
      <Header className="header">
        <div className="header-left">
          <Button 
            className="mobile-menu-button" 
            type="text" 
            icon={<MenuOutlined />} 
            onClick={() => setMobileMenuVisible(true)} 
          />
          <div className="logo">
            <img src={logo} alt="无人机之家" />
            <span>无人机之家</span>
          </div>
          <div className="desktop-menu">
            <Menu
              mode="horizontal"
              selectedKeys={[location.pathname]}
              items={menuItems}
              onClick={handleMenuClick}
            />
          </div>
        </div>
        <div className="header-right">
          <Search placeholder="搜索..." className="search-input" />
          <Badge count={5} size="small">
            <BellOutlined className="notification-icon" />
          </Badge>
          {isLoggedIn ? (
            <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
              <Avatar icon={<UserOutlined />} />
            </Dropdown>
          ) : (
            <div className="auth-buttons">
              <Button type="link" onClick={() => navigate('/login')}>登录</Button>
              <Button type="primary" onClick={() => navigate('/register')}>注册</Button>
            </div>
          )}
        </div>
      </Header>
      
      {renderMobileMenu()}
      
      <Content className="main-content">
        <Outlet />
      </Content>
      
      <Footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>关于我们</h3>
            <p>无人机之家 - 全方位的无人机行业综合服务平台</p>
          </div>
          <div className="footer-section">
            <h3>联系方式</h3>
            <p>电话: 400-123-4567</p>
            <p>邮箱: info@dronehome.com</p>
          </div>
          <div className="footer-section">
            <h3>友情链接</h3>
            <a href="https://www.example.com">无人机技术论坛</a>
            <a href="https://www.example.com">航空器材网</a>
          </div>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} 无人机之家 版权所有
        </div>
      </Footer>
    </Layout>
  );
};

export default MainLayout; 