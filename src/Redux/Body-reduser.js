import {ADD_MESS, DELETE_MESS} from "./Name_actions";
const Bodystate={
    mess:[
        {id:1, item:'Hello I`m is Ukraine!'}
    ]
}
const bodyReduser=(state=Bodystate,action)=>{
    switch (action.type) {
        case ADD_MESS:
        let add={...state,mess:[...state.mess, action.payload]}
            return add
        case DELETE_MESS:
            let del={...state,mess:state.mess.filter(i=>i.id!==action.payload)}
            return del
        default:
            return state
    }
}


export default  bodyReduser
