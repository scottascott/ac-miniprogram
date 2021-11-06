import React, { Component } from 'react';
import Pic from '../ac-imgs/1.PNG'
import {Typography,Button} from 'antd'
import { LeftOutlined } from '@ant-design/icons';
import Comments from '../Comment';
const {  Title ,Paragraph} = Typography;
class Ac1 extends Component {
    goBack=()=>{
        this.props.history.goBack()
    }
    render() {
        return (
            <div style={{width:"90%",margin:'0 auto',textAlign: 'left'}}>
                <Title level={3}  style={{float: 'left'}}>里多运河</Title>
                <Button onClick={this.goBack} type="primary" shape="circle" icon={<LeftOutlined />} style={{float: 'right'}}/>
                <Paragraph><img src={Pic} alt="Not found" width="100%"></img></Paragraph>
                <Paragraph>里多运河是一条历史悠久的历史悠久的水道，蜿蜒穿过渥太华市中心。 运河将城市连接到附近的主要水域，包括渥太华河和安大略湖。 运河本身可以追溯到1832，当时它被用作军事防御系统，但今天这条运河可以作为一个全年的休闲景点。</Paragraph>
                <Paragraph>在温暖的月份，人们走路，骑自行车，或骑在运河上的人行道上，或乘船划水穿过水。 在寒冷的季节，河流冻结并转变为一个广阔的公共溜冰场，穿过城市。</Paragraph>
                <Paragraph>里多运河建成于1832年，连接渥太华河与安大略湖，东达大西洋，西面则通往北美五大湖区，建造的初衷是为替代圣劳伦斯河（St. Lawrence River），作为商业及战略的重要通道。里多运河（Rideau Canal）全长202公里，竣工于1832年的里多运河包括47个石建水闸和53个水坝，是19世纪工程技术的奇迹。里多运河因其土木工程、建筑和防御工事结构中所体现的纯正手工工艺而获得世界遗产称号。在概念、设计和保存状态上，它是世界上最杰出的平流运河，也是最早为行驶蒸汽船而设计的运河之一。里多运河是自19世纪建于北美以来，至今仍在继续营运的最古老、最庞大的运河系统，在当时起着重要的运输作用，目前它的绝大部分设施都还保持着170多年前的风貌。但现今运河已不能容纳大型船只通过，运河上有十座大桥横跨东西两岸。当年河上的水闸、水坝等石彻工程，现在成为历史性文物。而运河沿途的绮丽风光更使其成为渥太华最迷人的观光重点之一。</Paragraph>
                <em><Paragraph copyable>380 Sussex博士，加拿大渥太华</Paragraph></em>
                <em><Paragraph copyable>613-990-1985</Paragraph></em>
                <Comments/>
            </div>
        );
    }
}

export default Ac1;