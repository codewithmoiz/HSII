import React from 'react';
import { ProTable } from '@ant-design/pro-table';

const Students = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Registration Date',
      dataIndex: 'registrationDate',
      key: 'registrationDate',
    },
  ];

  const data = [
    { key: '1', name: 'John Doe', email: 'johndoe@example.com', registrationDate: '2024-01-10' },
    { key: '2', name: 'Jane Smith', email: 'janesmith@example.com', registrationDate: '2024-02-15' },
  ];

  return (
    <ProTable
      columns={columns}
      dataSource={data}
      rowKey="key"
      pagination={false}
      search={false}
    />
  );
};

export default Students;
