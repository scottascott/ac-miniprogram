import React, { Component } from 'react'
import Search from './Search'
import List from './List'
export default class News extends Component {
    state={
        users:['asd'],
        isFirst:true,
        isLoading:false,
        err:''
    }

    updateAppState=(stateObj)=>{
        this.setState(stateObj)
    }
    render() {

        return (
            <div>
                <div className="container">
                    <Search updateAppState={this.updateAppState}/>
                    <List {...this.state}/>
                </div>
            </div>
        )
    }
}
