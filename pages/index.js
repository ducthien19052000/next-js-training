import { Layout,  Table, Button, Spin, Alert, notification } from 'antd';
import { useEffect, useState } from 'react';
import apiEmployee from "./api/employeeApi"
import {bindActionCreators} from 'redux'
import * as employeeAction from '../redux/action/index'
import { DeleteFilled, EditFilled } from '@ant-design/icons'
import {deleteData} from '../redux/action/index'
import {connect} from 'react-redux'
import { useRouter,Link } from 'next/router';
import confirm from 'antd/lib/modal/confirm';
const { Header, Content, Footer } = Layout;

const Home=({employee,onDeleteEmployee,employeeAct})=> {
  
  
  const router = useRouter();
  const [isLoading,setIsLoading] = useState(true)
  useEffect(()=>{
      
    fetch('https://5faaab72b5c645001602b026.mockapi.io/employee/')
    .then(res => res.json())
    .then(res => {
        if(res.error) {
            throw(res.error);
        }
        employeeAct.getDataSuccess(res)
        setIsLoading(false)
        return res;
    })
    .catch(error => {
       
    })
  },[])
 
  const deleteEmployee= async (id)=>{
    const { data } = await apiEmployee.removeEmployee(id);
    onDeleteEmployee(data.id)
  }
  const onDelete =  (id) => {
    try {
      confirm({
        title: 'Bạn muốn xóa nhân viên này?',
    
        content: `Sản phẩm`,
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
          deleteEmployee(id)
          
          notification['success']({
            message: '',
            duration: 2,
            description:
              'Xóa thành công',
          });
        },
        onCancel() {

        },
      });
    } catch (error) {
      console.log('You have an error', error)
    }
  }

  
  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Phone', dataIndex: 'phone', key: 'phone' },
    { title: 'Date of birth', dataIndex: 'dateofbirth', key: 'dateofbirth' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    {
      title: 'Action',
      dataIndex: '',
      with:'15%',
      key: 'x',
      render: (text, record) => <>  <>
      <Button onClick={()=>onDelete(record.id)}><DeleteFilled /></Button>
      <Button  onClick={()=>router.push(`/editEmployee/${record.id}`)}><EditFilled /></Button>
      
      </></>,
    },
  ];
 
  return (
    <Layout className="layout">
    <Header>
      <div className="logo" />
     
    </Header>
    <Content style={{ padding: '0 50px',minHeight:'100vh',marginTop:'30px' }}>

    {isLoading ? 
    
     <Spin tip="Loading...">
    <Alert
      message="Thông báo"
      description="Vui lòng chờ load dữ liệu"
      type="info"
    />
  </Spin>
   
    : 
    <>
    <Button onClick={()=>router.push('/addEmployee')} type='primary'>Them nhan vien</Button>
    <Table
    columns={columns}
    expandable={{
      expandedRowRender: record => <p style={{ margin: 0 }}>{record.name}</p>
    }}
    dataSource={employee} /></>
   
 }
   

   
    </Content>
    <Footer style={{ textAlign: 'center',background:'black',color:'#fff' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  )
}
const  mapStateToProps= state =>{
  return {
      employee:state.employeeData.lists
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    employeeAct: bindActionCreators(employeeAction,dispatch),
    onDeleteEmployee: (id) => {
      dispatch(deleteData(id));
    },
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);

