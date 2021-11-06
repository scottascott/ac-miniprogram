import {ADDMONEY} from '../constant'

const iniState=567

export default function add_money(preState=iniState,action) {
    const{type,data}=action
    switch (type) {
        case ADDMONEY:
            return preState+data*1
        default:
            return preState
    }
}
