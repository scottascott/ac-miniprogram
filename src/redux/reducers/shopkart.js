import {ADDSHOPKART,REMOVESHOPKART} from '../constant'

const iniState=[]

export default function add_shopkart(preState=iniState,action) {
    const{type,data}=action
    switch (type) {
        case ADDSHOPKART:
            let r=preState
            let rid=r.map(rObj=>rObj.id)
            if(rid.includes(data.id))
                r=r.filter(item => item.id !== data.id);
            else
                r=[data,...r]
            return r
        case REMOVESHOPKART:
            return preState.filter(item => item.id !== data.id);
        default:
            return preState
    }
}
