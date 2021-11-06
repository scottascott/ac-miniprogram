import React, { Component } from 'react';
import Pic from '../ac-imgs/4.PNG'
import {Typography,Button} from 'antd'
import { LeftOutlined } from '@ant-design/icons';
import Comments from '../Comment';
const {  Title ,Paragraph} = Typography;
class Ac4 extends Component {
    goBack=()=>{
        this.props.history.goBack()
    }
    render() {
        return (
            <div style={{width:"90%",margin:'0 auto',textAlign: 'left'}}>
                <Title level={3}  style={{float: 'left'}}>巴黎圣母院大教堂</Title>
                <Button onClick={this.goBack} type="primary" shape="circle" icon={<LeftOutlined />} style={{float: 'right'}}/>
                <Paragraph><img src={Pic} alt="Not found" width="100%"></img></Paragraph>
                <Paragraph>巴黎圣母院大教堂是渥太华下城附近的国家历史遗址。 第一座建筑是在1832建立的，但十年后被现存的建筑所取代。 新古典主义设计是一个详细而华丽的创作，是渥太华最大和最古老的教堂。</Paragraph>
                <Paragraph>5月至10月期间，教堂向公众开放，提供导游服务。 旅行团提供有关教堂建筑和历史的背景和教育，以及有关教区的最新信息。</Paragraph>
                <em><Paragraph copyable>385 Sussex博士，加拿大渥太华</Paragraph></em>
                <em><Paragraph copyable>613-241-7496</Paragraph></em>
                <Comments/>
            </div>
        );
    }
}

export default Ac4;


