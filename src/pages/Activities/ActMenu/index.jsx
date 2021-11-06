import React, { Component } from 'react';
// import {  SmileOutlined, SmileFilled } from '@ant-design/icons';

// import { Typography } from 'antd';
// import {Link} from 'react-router-dom'
// const {  Paragraph  } = Typography;

import { List,  Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import Img1 from '../ac-imgs/1.PNG'
import Img2 from '../ac-imgs/2.PNG'
import Img3 from '../ac-imgs/3.PNG'
import Img4 from '../ac-imgs/4.PNG'
import Img5 from '../ac-imgs/5.PNG'

const acts=[
    {id:"Ac1",title:"Rideau Canal",imgsrc:Img1},
    {id:"Ac2",title:"Capitol Hill",imgsrc:Img2},
    {id:"Ac3",title:"National Gallery of Canada",imgsrc:Img3},
    {id:"Ac4",title:"Notre Dame Cathedral",imgsrc:Img4},
    {id:"Ac5",title:"Peace Tower",imgsrc:Img5},
]

const listData = [];
for (let i = 0; i < acts.length; i++) {
  listData.push({
    href: 'http://localhost:3000/Activities/Acs/'+acts[i].id,
    title: acts[i].title,
    content:
      '活动详细信息',
    imgsrc: acts[i].imgsrc,
  });
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

class ActMenu extends Component {
    render() {
        return (
            <div style={{textAlign:'left'}}>
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 4,
                    }}
                    dataSource={listData}
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            actions={[
                            <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                            <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                            ]}
                            extra={
                                <a href={item.href}>
                                    <img
                                        width='100%'
                                        alt="logo"
                                        src= {item.imgsrc}
                                        // src={<a href={item.href}>{"https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"}</a>}
                                    />
                                </a>
                            }
                        >
                            <List.Item.Meta
                            title={<a href={item.href}>{item.title}</a>}
                            />
                            {/* {item.content} */}
                        </List.Item>
                    )}
                />

            </div>
        );
    }
}

export default ActMenu;