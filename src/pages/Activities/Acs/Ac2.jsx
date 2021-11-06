import React, { Component } from 'react';
import Pic from '../ac-imgs/2.PNG'
import {Typography,Button} from 'antd'
import { LeftOutlined } from '@ant-design/icons';
import Comments from '../Comment';
const {  Title ,Paragraph} = Typography;
class Ac2 extends Component {
    goBack=()=>{
        this.props.history.goBack()
    }
    render() {
        return (
            <div style={{width:"90%",margin:'0 auto',textAlign: 'left'}}>
                <Title level={3}  style={{float: 'left'}}>国会山和建筑物</Title>
                <Button onClick={this.goBack} type="primary" shape="circle" icon={<LeftOutlined />} style={{float: 'right'}}/>
                <Paragraph><img src={Pic} alt="Not found" width="100%"></img></Paragraph>
                <Paragraph>渥太华国会山是一座建筑群，是加拿大联邦立法机构的所在地。 广阔的引人注目的新哥特式建筑位于渥太华市中心核心的渥太华河边缘。 这些建筑在作为官方政府机构的同时，向公众开放，可以通过历史建筑内部以及郁郁葱葱的花园和覆盖地面的古迹参观。</Paragraph>
                <Paragraph>在整个夏天，国会山的每日表演都会发生卫冕改变。 这个精心设计的丰富多彩的活动，带有一个行进的例行程序，展示了加拿大真正的皇家制服，并伴随着音乐表演。</Paragraph>
                <Comments/>
            </div>
        );
    }
}

export default Ac2;


