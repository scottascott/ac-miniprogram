import React, { Component } from 'react';
import Pic from '../ac-imgs/5.PNG'
import {Typography,Button} from 'antd'
import { LeftOutlined } from '@ant-design/icons';
import Comments from '../Comment';
const {  Title ,Paragraph} = Typography;
class Ac5 extends Component {
    goBack=()=>{
        this.props.history.goBack()
    }
    render() {
        return (
            <div style={{width:"90%",margin:'0 auto',textAlign: 'left'}}>
                <Title level={3}  style={{float: 'left'}}>和平塔</Title>
                <Button onClick={this.goBack} type="primary" shape="circle" icon={<LeftOutlined />} style={{float: 'right'}}/>
                <Paragraph><img src={Pic} alt="Not found" width="100%"></img></Paragraph>
                <Paragraph>这座塔被称为胜利与和平塔，俗称和平塔，高度超过300高，是渥太华天际线的一个独特组成部分。 和平塔位于渥太华议会山的核心地带，设有钟罩和钟，是国家的标志。 和平塔甚至出现在加拿大的二十美元钞票上。</Paragraph>
                <Paragraph>和平塔取代了维多利亚塔，它在1916中被烧毁，并以华丽的维多利亚哥特式风格重建，以补充其余的议会建筑群。 该塔被认为是第一次世界大战期间死亡的加拿大士兵的纪念碑，包含广泛的符号，设计特征和描绘加拿大历史的建筑细节。</Paragraph>
                <em><Paragraph copyable>Wellington St，Ottawa，Canada</Paragraph></em>
                <em><Paragraph copyable>613-992-4793</Paragraph></em>
                <Comments/>
            </div>
        );
    }
}

export default Ac5;


