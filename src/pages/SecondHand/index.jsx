import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Route,Switch,Redirect} from 'react-router-dom'
import Goods from '../../components/Goods';
import Shopkart from '../../components/Shopkart';
import Favorites from '../../components/Favorites';
import User from '../../components/User';
import {add_favorites} from '../../redux/actions/favorites'
import {add_shopkart,remove_shopkart} from '../../redux/actions/shopkart'
import {add_money} from '../../redux/actions/money'


class SecondHand extends Component {
    render() {
        return (
            <div>
                <User {...this.props}/>
                <Switch>
                    <Route path='/secondhand/goods' component={Goods}/>
                    <Route path='/secondhand/shopkart' component={Shopkart}/>
                    <Route path='/secondhand/favorites' component={Favorites}/>
                    <Redirect to='/secondhand/goods'/>
                </Switch>

            </div>
        );
    }
}

export default connect(
    state=>({
        money:state.money,
        favorites:state.favorites,
        shopkart:state.shopkart,
    }),
    {
        add_favorites,
        add_shopkart,
        add_money,
        remove_shopkart,
    }
)(SecondHand)