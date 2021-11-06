import {ADDSHOPKART,REMOVESHOPKART} from '../constant.js'

export const add_shopkart= personObj => ({type:ADDSHOPKART,data:personObj})
export const remove_shopkart= personObj => ({type:REMOVESHOPKART,data:personObj})