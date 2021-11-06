import React, { Component } from 'react';
import { Card,BackTop,Menu,Dropdown } from 'antd';
import Masonry from 'react-masonry-css';
import {  EllipsisOutlined, StarOutlined,LikeOutlined,CommentOutlined,ShareAltOutlined ,ShoppingCartOutlined   } from '@ant-design/icons';
import I1 from './imgs/1.PNG'
import I2 from './imgs/2.PNG'
import I3 from './imgs/3.PNG'
import I4 from './imgs/4.PNG'
import I5 from './imgs/5.PNG'
import I6 from './imgs/6.PNG'
import I7 from './imgs/7.PNG'
import I8 from './imgs/8.PNG'
import I9 from './imgs/9.PNG'
import I10 from './imgs/10.PNG'

import store from '../../redux/store'
import {add_shopkart} from '../../redux/actions/shopkart'
import { add_favorites } from '../../redux/actions/favorites';

import "./masonryCard.css"

const { Meta } = Card;

const menu = (
    <Menu>
      <Menu.Item key="0">
        <LikeOutlined />Like
      </Menu.Item>
      <Menu.Item key="1">
        <ShareAltOutlined />Share
      </Menu.Item>
      <Menu.Item key="2">
          <CommentOutlined />Comments
      </Menu.Item>
      {/* <Menu.Divider /> */}
    </Menu>
  );

const cardInfo=[
    {id:1,price:'20',title:'Second-hand sweater',description:'Ladies\' favorite',src:I1},
    {id:2,price:'320',title:'Rice cooker',description:'The rice cooker has only been used for a week, and it is very clean',src:I2},
    {id:3,price:'260',title:'Used IPAD',description:'It has been used for a year, so it is cheap. The useful apps I downloaded are Youtube for watching online lessons and movies, bilibili for watching animation, BBC news for reading news and English ability.',src:I8},
    {id:4,price:'66',title:'flashlight',description:'Can be used by changing the battery',src:I3},
    {id:5,price:'2',title:'pencil',description:'The quality is very good and has not been used',src:I4},
    {id:6,price:'8',title:'Bulb',description:'There are 8 in total, there are discounts if you buy more',src:I5},
    {id:7,price:'12',title:'tea',description:'Freshly shipped from China',src:I6},
    {id:8,price:'35',title:'Notebook',description:'Blueline NotePro Undated Daily Planner, 200 Pages, Black, 11-Inch x 8-1/2-Inch',src:I9},
    {id:9,price:'10',title:'Second-hand lipstick',description:'1111',src:I7},
    {id:10,price:'20',title:'sweater',description:'Men\'s favorite, come buy it',src:I10},
    
]
export default class Goods extends Component {
    constructor(props){
        super(props)
        var initf=[]
        var initfObj={a:0,b:0}
        for (let index = 0; index < 10; index++) {
            initf.push(initfObj)
        }
        this.state={flag:initf}
    }
    changeColor=(id)=>{
        //change color
        var tmpf=this.state.flag
        tmpf[id-1]={a:1-tmpf[id-1].a*1,b:tmpf[id-1].b}
        this.setState({flag:tmpf})

        store.dispatch(add_shopkart(cardInfo[id-1]))
    }
    changeColor2=(id)=>{
        //change color
        var tmpf=this.state.flag
        tmpf[id-1]={a:tmpf[id-1].a,b:1-tmpf[id-1].b*1}
        this.setState({flag:tmpf})
        
        store.dispatch(add_favorites(cardInfo[id-1]))
        // console.log(store.getState().favorites)
    }
    render() {
        return (
            <Masonry
                breakpointCols={2}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                <BackTop />
                {cardInfo.map((cardObj)=>{
                    return (
                        <Card key={cardObj.id}
                            hoverable
                            cover={<img alt="example" src={cardObj.src} />}
                            actions={[
                                <ShoppingCartOutlined  style={{color:this.state.flag[cardObj.id-1].a*1===0?'#000000':'#1DA57A'}}  onClick={()=>this.changeColor(cardObj.id)} key="shop" />,
                                <StarOutlined  style={{color:this.state.flag[cardObj.id-1].b*1===0?'#000000':'#1DA57A'}}  onClick={()=>this.changeColor2(cardObj.id)} key="favorites" />,
                                <Dropdown overlay={menu} trigger={['click']}>
                                    <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    <EllipsisOutlined key="ellipsis" />
                                    </div>
                                </Dropdown>
                            ]}
                        >
                        
                        <Meta title={cardObj.title} description={cardObj.description} />
                        </Card>
                    )
                })}
            </Masonry>
        );
    }
}
