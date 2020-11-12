import React from 'react'
import { Layout,  Table, Button, Spin, Alert, Form, Input, InputNumber, notification } from 'antd';
import { connect } from 'react-redux';
import { addData } from '../../redux/action';
import apiEmployee from "../api/employeeApi"
import { useRouter } from 'next/router';


const { Header, Content, Footer } = Layout;
   

const AddEmployee = ({onAddEmployee}) => {

  const router = useRouter();

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
  };

  const addEmployee= async (employee)=>{
    const { data } = await apiEmployee.createEmployee(employee);
    onAddEmployee(data)
  }
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  
    const onFinish = (values) => {
      addEmployee(values.user)
      notification['success']({
        message: '',
        duration: 2,
        description:
          'Thêm thành công',
      });
      router.push('/');
    }
    return (
        <Layout className="layout">
        <Header>
          <div className="logo" />
         
        </Header>
        <Content style={{ padding: '0 50px',minHeight:'100vh',marginTop:'30px' }}>
        <Form  {...layout}  name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'phone']}
        label="Phone"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'dateofbirth']}
        label="Date of birth"
      
      >
        <Input type='date' />
      </Form.Item>
      <Form.Item name={['user', 'address']} label="Address"  rules={[
          {
            required: true,
          },
        ]}>
        <Input />
      </Form.Item>
     
      <Form.Item wrapperCol={{   wrapperCol: {
    span: 16,
  }, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
   
       
    
       
        </Content>
        <Footer style={{ textAlign: 'center',background:'black',color:'#fff' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
   
    onAddEmployee : (data) => {
      dispatch(addData(data));
    }
  }
}

export default connect(null,mapDispatchToProps)(AddEmployee)
