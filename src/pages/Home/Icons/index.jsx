import React, { Component } from 'react';
import {HeartOutlined,MessageOutlined,TransactionOutlined,CalculatorOutlined,WhatsAppOutlined,WifiOutlined,QqOutlined,WechatOutlined} from '@ant-design/icons'
import { Card, Col, Row ,message, notification } from 'antd';
const gridStyle = {
    textAlign: 'center',
    fontSize: '12px',
  };
  
class Icons extends Component {
    info = () => {
      message.info('This function is not done yet');
    };
    openNotification = () => {
        notification.open({
            message: 'AC Chinese Student QQ Group Chat',
            description:
            <div>Group chat 1：1234567890 <br />Group chat 2：1234567891 <br />Group chat 3：1234567892</div>,
            duration:0,
        });
    };
    openWifiNotification = () => {
        notification.open({
            message: 'Campus Wifi',
            description:
            <div>Name: XXX-connect <br />Password: 1234567</div>,
        });
    };

    render() {
        return (
            <div>
                <p/>
                <div className="site-card-wrapper" style={{ fontSize: '24px' }}>
                    <Row  >
                        <Col span={6} onClick={this.info}>
                            <Card size="small" style={gridStyle} title={<HeartOutlined style={{ fontSize: '24px' }}/>} bordered={false}>
                            急救热线
                            </Card>
                        </Col>
                        <Col span={6} onClick={this.info}>
                            <Card size="small" style={gridStyle} title={<MessageOutlined style={{ fontSize: '24px' }}/>} bordered={false}>
                            我的消息
                            </Card>
                        </Col>
                        <Col span={6} onClick={this.info}>
                            <Card size="small" style={gridStyle} title={<TransactionOutlined style={{ fontSize: '24px' }}/>} bordered={false}>
                            国际汇款
                            </Card>
                        </Col>
                        <Col span={6} onClick={this.info}>
                            <Card size="small" style={gridStyle} title={<CalculatorOutlined style={{ fontSize: '24px' }}/>} bordered={false}>
                            GPA计算
                            </Card>
                        </Col>
                        <Col span={6} onClick={this.info}>
                            <Card size="small" style={gridStyle} title={<WhatsAppOutlined style={{ fontSize: '24px' }}/>} bordered={false}>
                            联系我们
                            </Card>
                        </Col>
                        <Col span={6} onClick={this.openWifiNotification}>
                            <Card size="small" style={gridStyle} title={<WifiOutlined style={{ fontSize: '24px' }}/>} bordered={false}>
                            校园wifi
                            </Card>
                        </Col>
                        <Col span={6} onClick={this.info}>
                            <Card size="small" style={gridStyle} title={<WechatOutlined style={{ fontSize: '24px' }}/>} bordered={false}>
                            官方微信
                            </Card>
                        </Col>
                        <Col span={6} onClick={this.openNotification}>
                            <Card size="small" style={gridStyle} title={<QqOutlined style={{ fontSize: '24px' }}/>} bordered={false}>
                            校友Q群
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Icons;