import React, { Component } from 'react'
import { Spin } from 'antd';
export default class Loading extends Component {
    render() {
        return (
            <div style={{marginTop:'50px'}}>
                <Spin size="large" />
            </div>
        )
    }
}
