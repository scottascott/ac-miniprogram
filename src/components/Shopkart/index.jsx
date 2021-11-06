import React, { useState } from 'react';
import { Table,Button,Space,notification  } from 'antd';
import store from '../../redux/store';
import {add_shopkart} from '../../redux/actions/shopkart';
import {add_money} from '../../redux/actions/money';
const columns = [
  {
    title: 'Product',
    dataIndex: 'name',
  },
  {
    title: 'Description',
    dataIndex: 'describe',
  },
  {
    title: 'Price',
    dataIndex: 'price',
  },
];


let rowSelected=[]
let p=0;

//notification after payment
const openNotificationSuccess = () => {
  notification.open({
    message: 'Congratulations!',
    description:
    <div>You have successfully made the payment!Thanks for your patronage!<br />Your current balance: {store.getState().money} <br />You have paid: {p}</div>,
  });
};
const openNotificationFail = () => {
  notification.open({
    message: 'Warning!',
    description:
    <div>Your account doesn't have enough money!<br />Your current balance: {store.getState().money} <br />You need to pay: {p}</div>,
  });
};

const Shopkart = () => {
  const [selectionType] = useState('checkbox');
  const [priceNow,setPriceNow] = useState(0)
  const {shopkart}=store.getState()
  const data =[]
  for (let index = 0; index < shopkart.length; index++) {
    let des=shopkart[index].description
    let dataObj={
      key:shopkart[index].id,
      id:shopkart[index].id,
      name:shopkart[index].title,
      price:shopkart[index].price,
      describe:des.length>30?des.substring(0,30)+'...':des,
    }
    data.push(dataObj)
  }
  //get information of selected rows
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      rowSelected=selectedRows
      let tmp=0
      for (let i = 0; i < selectedRows.length; i++) {
        tmp+=selectedRows[i].price*1
      }
      p =tmp
      setPriceNow(p)
    },
  };
  //purchase&delete rows
  
  const clearShopKart=()=>{
    for (let i = 0; i < rowSelected.length; i++) {
      store.dispatch(add_shopkart(rowSelected[i]))
    }
    rowSelected=[]
    setPriceNow(0)
  }
  const purchase=()=>{
    if(p!==0){
      if(store.getState().money>p){
        store.dispatch(add_money(-p))
        openNotificationSuccess()
        clearShopKart()
        
      }
      else
        openNotificationFail()
    }
  }
  return (
    <div>
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
      <div style={{float:'right'}}>
        <Space>
          <h4 style={{float:'left'}}>Total price:{priceNow}</h4>
          <Button onClick={clearShopKart}>Remove</Button>
          <Button onClick={purchase} type="primary">Purchase</Button>
        </Space>
      </div>
    </div>
  );
};

export default Shopkart