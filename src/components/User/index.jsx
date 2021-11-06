import React, { Component,useState  } from 'react'
import { Card ,Statistic,  Button,Popconfirm, message,Drawer,Divider } from 'antd';
import {  LogoutOutlined, ShoppingCartOutlined,UserOutlined,ShopOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'


import { Typography } from 'antd';

const { Paragraph ,Text} = Typography;

const { Meta } = Card;

class Stat extends Component{
    render(){
        return(
            <div   >
                <Statistic  style={{ marginTop: 0 ,float:'left'}} title="Balance" value={this.props.money} precision={2} />
                <Button style={{ marginTop: 30 ,float:'right'}} type="primary" onClick={()=>this.props.add_money(50)}>
                    Recharge
                </Button>
            </div>
        )
    }
}


function confirm(e) {
    // console.log(e);
    message.success('User logged out!');
}

const Information = () => {
    const [editableStr, setEditableStr] = useState('Scott Wang');
    const [editableStr1, setEditableStr1] = useState('123 xxx Rd, Ottawa');
    const [editableStr2, setEditableStr2] = useState('+1 888-888-8888');
    return (
        <>
            <UserOutlined style={{fontSize:'50px'}}/>&nbsp;&nbsp;<Text strong>Scott</Text>
            <Divider />
            <Text>User Name:</Text>
            <Paragraph editable={{ onChange: setEditableStr }}>{editableStr}</Paragraph>
            <Text>Address:</Text>
            <Paragraph editable={{ onChange: setEditableStr1 }}>{editableStr1}</Paragraph>
            <Text>Phone:</Text>
            <Paragraph editable={{ onChange: setEditableStr2 }}>{editableStr2}</Paragraph>
        </>
    )
}

export default class User extends Component {

    state = { 
        visible: false,
    };
    showDrawer = () => {
        this.setState({
          visible: true,
        });
    };
    
    onClose = () => {
        this.setState({
          visible: false,
        });
    };

    render() {
        const {  visible } = this.state;
        const {money,add_money}=this.props
        return (
            <div style={{textAlign:'left'}}>
                <Card
                    style={{ width: '100%'}}
                    actions={[
                        <Link to='/secondhand/goods'><ShopOutlined key="goods" /></Link>,
                        <Link to='/secondhand/shopkart'><ShoppingCartOutlined key="shopkart" /></Link>,
                        // <Link to='/secondhand/favorites'><StarOutlined key="favorites" /></Link>,
                        <Popconfirm
                            title="Are you sure you want to log out?"
                            onConfirm={confirm}
                            okText="yes"
                            cancelText="no"
                        ><LogoutOutlined key="logout" /></Popconfirm>
                        ,
                    ]}
                >
                    <Meta
                    avatar={<UserOutlined style={{fontSize:'40px'}} onClick={this.showDrawer}/>}
                    title="Scott"
                    description={<Stat money={money} add_money={add_money}/>}
                    />
                    <Drawer
                        title="User information"
                        closable={false}
                        onClose={this.onClose}
                        visible={visible}
                        >
                        <Information/>
                    </Drawer>   
                </Card>
            </div>
        )
    }
}
