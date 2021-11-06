import {combineReducers} from 'redux'
import favorites from './favorites.js'
import shopkart from './shopkart.js'
import money from './money.js'

const allReducers=combineReducers({
    favorites,
    shopkart,
    money,
})

export default allReducers