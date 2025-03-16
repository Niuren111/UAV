import React from 'react';
import { createHashRouter } from 'react-router-dom';
import HomePage from './pages/home';
import JobsPage from './pages/jobs';
import TasksPage from './pages/tasks';
import TrainingPage from './pages/training';
import BookingPage from './pages/booking';
import MarketplacePage from './pages/marketplace';
import UserPage from './pages/user';

const router = createHashRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/jobs',
    element: <JobsPage />,
  },
  {
    path: '/tasks',
    element: <TasksPage />,
  },
  {
    path: '/training',
    element: <TrainingPage />,
  },
  {
    path: '/booking',
    element: <BookingPage />,
  },
  {
    path: '/marketplace',
    element: <MarketplacePage />,
  },
  {
    path: '/user',
    element: <UserPage />,
  },
]);

export default router; 