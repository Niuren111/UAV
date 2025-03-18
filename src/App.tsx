import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Spin } from 'antd';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/home';
import './App.css';

// 懒加载路由组件
const TransportPage = lazy(() => import('./pages/transport'));
const TrainingPage = lazy(() => import('./pages/training'));
const LowAltitudePage = lazy(() => import('./pages/low-altitude'));
const StorePage = lazy(() => import('./pages/store'));
const ProfilePage = lazy(() => import('./pages/profile'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模拟应用初始化加载
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spin size="large" tip="加载中..." />
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route 
          path="transport/*" 
          element={
            <Suspense fallback={<Spin size="large" tip="加载中..." />}>
              <TransportPage />
            </Suspense>
          } 
        />
        <Route 
          path="training/*" 
          element={
            <Suspense fallback={<Spin size="large" tip="加载中..." />}>
              <TrainingPage />
            </Suspense>
          } 
        />
        <Route 
          path="low-altitude/*" 
          element={
            <Suspense fallback={<Spin size="large" tip="加载中..." />}>
              <LowAltitudePage />
            </Suspense>
          } 
        />
        <Route 
          path="store/*" 
          element={
            <Suspense fallback={<Spin size="large" tip="加载中..." />}>
              <StorePage />
            </Suspense>
          } 
        />
        <Route 
          path="profile/*" 
          element={
            <Suspense fallback={<Spin size="large" tip="加载中..." />}>
              <ProfilePage />
            </Suspense>
          } 
        />
      </Route>
    </Routes>
  );
}

export default App; 