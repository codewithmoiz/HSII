import React from 'react';
import { Form, Input, Button, Radio, DatePicker, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const StudentRegistration = () => {
  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '100px 0' }}>
      <h2>Student Registration</h2>
      <Form name="registration">
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: 'Please input your first name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: 'Please input your last name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Father's Name"
          name="fatherName"
          rules={[{ required: true, message: 'Please input your father\'s name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Age"
          name="age"
          rules={[{ required: true, message: 'Please input your age!' }]}
        >
          <Input type="number" min={1} />
        </Form.Item>

        <Form.Item
          label="Last Qualification"
          name="lastQualification"
          rules={[{ required: true, message: 'Please select your last qualification!' }]}
        >
          <Radio.Group>
            <Radio value="Middle">Middle</Radio>
            <Radio value="Matriculation">Matriculation</Radio>
            <Radio value="Intermediate">Intermediate</Radio>
            <Radio value="Graduation">Graduation</Radio>
            <Radio value="Masters">Masters</Radio>
            <Radio value="Other">Other</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="CNIC/B-Form Number"
          name="cnicOrBForm"
          rules={[{ required: true, message: 'Please input your CNIC/B-Form number!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Father's CNIC (Optional)"
          name="fathersCnic"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Guardian Number"
          name="guardianNumber"
          rules={[{ required: true, message: 'Please input your guardian number!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Contact Number"
          name="contactNumber"
          rules={[{ required: true, message: 'Please input your contact number!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="WhatsApp Number"
          name="whatsappNumber"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Gender"
          name="gender"
          rules={[{ required: true, message: 'Please select your gender!' }]}
        >
          <Radio.Group>
            <Radio value="Male">Male</Radio>
            <Radio value="Female">Female</Radio>
            <Radio value="Other">Other</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Date of Birth"
          name="dateOfBirth"
          rules={[{ required: true, message: 'Please select your date of birth!' }]}
        >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          label="Email ID"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'Please enter a valid email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Why do you want to enroll?"
          name="wishToEnroll"
        >
          <Input.TextArea rows={4} placeholder="Write your wish here..." />
        </Form.Item>

        <Form.Item
          label="Upload Applicant's Image"
          name="applicantImage"
          rules={[{ required: true, message: 'Please upload an image of the applicant!' }]}
        >
          <Upload beforeUpload={() => false}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default StudentRegistration;
