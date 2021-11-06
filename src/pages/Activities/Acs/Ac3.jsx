import React, { Component } from 'react';
import Pic from '../ac-imgs/3.PNG'
import {Typography,Button} from 'antd'
import { LeftOutlined } from '@ant-design/icons';
import Comments from '../Comment';
const {  Title ,Paragraph} = Typography;
class Ac3 extends Component {
    goBack=()=>{
        this.props.history.goBack()
    }
    render() {
        return (
            <div style={{width:"90%",margin:'0 auto',textAlign: 'left'}}>
                <Title level={3}  style={{float: 'left'}}>加拿大国家美术馆</Title>
                <Button onClick={this.goBack} type="primary" shape="circle" icon={<LeftOutlined />} style={{float: 'right'}}/>
                <Paragraph><img src={Pic} alt="Not found" width="100%"></img></Paragraph>
                <Paragraph>被认为是加拿大首屈一指的艺术画廊之一，国家美术馆是位于渥太华市中心的珍贵藏品。 该建筑本身是一个巨大的玻璃和花岗岩建筑，因其对渥太华壮观的天际线的贡献而闻名。 在2000，加拿大皇家建筑学院将该画廊命名为过去一千年建造的顶级500加拿大建筑之一。</Paragraph>
                <Paragraph>画廊内部拥有加拿大艺术最着名的收藏品之一，包括绘画，版画，绘画，现代和当代艺术，雕塑和照片。 现场还有大量的美国和欧洲作品。 画廊有一系列永久展品和旋转作品。</Paragraph>
                <em><Paragraph copyable>380 Sussex博士，加拿大渥太华</Paragraph></em>
                <em><Paragraph copyable>613-990-1985</Paragraph></em>
                <Comments/>
            </div>
        );
    }
}

export default Ac3;


