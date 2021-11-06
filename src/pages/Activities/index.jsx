import React, { Component } from 'react';
import ActMenu from './ActMenu';
import Ac1 from './Acs/Ac1';
import Ac2 from './Acs/Ac2';
import Ac3 from './Acs/Ac3';
import Ac4 from './Acs/Ac4';
import Ac5 from './Acs/Ac5';
import {Switch,Route,Redirect} from 'react-router-dom'
import {BackTop} from 'antd'

class Activities extends Component {
    render() {
        return (
            <div style={{margin: "0 auto"}}>
                <BackTop />
                <Switch>
                    <Route path='/Activities/actmenu' component={ActMenu}/>
                    <Route path='/Activities/Acs/Ac1' component={Ac1}/>
                    <Route path='/Activities/Acs/Ac2' component={Ac2}/>
                    <Route path='/Activities/Acs/Ac3' component={Ac3}/>
                    <Route path='/Activities/Acs/Ac4' component={Ac4}/>
                    <Route path='/Activities/Acs/Ac5' component={Ac5}/>
                    <Redirect to="/Activities/actmenu"/>
                </Switch>
            </div>
        );
    }
}

export default Activities;