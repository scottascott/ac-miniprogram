import {ADDFAVORITES} from '../constant'

const iniState=[]

export default function add_favorites(preState=iniState,action) {
    const{type,data}=action
    switch (type) {
        case ADDFAVORITES:
            let r=preState
            if(r.includes(data))
                r=r.filter(item => item.id !== data.id);
            else
                r=[data,...r]
            return r
        default:
            return preState
    }
}
