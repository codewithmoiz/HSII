import React from 'react';
import { DashboardOutlined, UserOutlined } from '@ant-design/icons';
import { ProLayout } from '@ant-design/pro-layout';
import Dashboard from './Dashboard';
import Students from './Students';
import AdminLogin from './AdminLogin';
import StudentRegistration from './StudentRegistration';

const App = () => {
  const menuItems = [
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: <DashboardOutlined />,
    },
    {
      path: '/students',
      name: 'Students',
      icon: <UserOutlined />,
    },
  ];

  return (
    <ProLayout
      title="HSII Admin"
      route={{ routes: menuItems }}
      location={{ pathname: window.location.pathname }}
      menuItemRender={(item, dom) => <span>{dom}</span>}
    >
      <div>
        {/* <Dashboard /> */}
        {/* <Students /> */}
        {/* <AdminLogin /> */}
        <StudentRegistration />
      </div>
    </ProLayout>
  );
};

export default App;
