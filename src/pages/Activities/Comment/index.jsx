import React, { Component } from 'react'
import { Comment, Tooltip, List } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import moment from 'moment';

const data = [
    {
      actions: [<span key="comment-list-reply-to-0">Reply to</span>],
      author: 'User 1',
      avatar: 'https://joeschmoe.io/api/v1/random',
      content: (
        <p>
          他们家的每一个真的都好吃 之前每次去都必点武汉热干面 作为一个热干面狂魔 真的很爱 很正宗 大馄饨和小馄饨也都很推荐👍🏻 有一次早上想吃汤面点了牛肉汤面 绝了 加入醋和辣椒就是注入灵魂🤟🏻
        </p>
      ),
      datetime: (
        <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().subtract(1, 'days').fromNow()}</span>
        </Tooltip>
      ),
    },
    {
      actions: [<span key="comment-list-reply-to-0">Reply to</span>],
      author: 'User 2',
      avatar: 'https://joeschmoe.io/api/v1/random',
      content: (
        <p>
          他们家主要都是川菜 喜欢吃辣的同学真的推荐 我太爱吃辣了 我上辈子一定是一个重庆人 烤鱼🉑 香辣蟹🉑 麻辣香锅🉑 农家小炒肉🉑 真的都🉑 ps ：要想吃香辣蟹的话需要提前预定 他们家每次都是从市场新鲜采购的 价格也很🉑 大概三四只的样子 16.99刀
        </p>
      ),
      datetime: (
        <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().subtract(2, 'days').fromNow()}</span>
        </Tooltip>
      ),
    },
  ];

export default class Comments extends Component {
    render() {
        return (
            <List
                className="comment-list"
                header={`${data.length} replies`}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <li>
                        <Comment
                        actions={item.actions}
                        author={item.author}
                        avatar={<UserOutlined/>} 
                        content={item.content}
                        datetime={item.datetime}
                        />
                    </li>
                )}
            />
        )
    }
}
