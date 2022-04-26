import bi1 from '../Body/bodyitem1.module.css'
import {useDispatch, useSelector} from "react-redux";
import React from 'react'
import {ADD_MESS, DELETE_MESS} from "../../Redux/Name_actions";

const Bodyitem1=()=>{
    const mess=useSelector(state=>state.itemmess.mess)
    const dispath=useDispatch()
    let newitem=React.createRef()
    let rez=mess.map(body=> <div onClick={()=>Delete(body)}>{body.item}</div>)
    const Save = () => {
        let item1 = newitem.current.value
        const message = {
            item: item1,
            id: Date.now()
        }
        newitem.current.value = ''
        dispath({type:ADD_MESS, payload:message})


    }
    const Delete=(body)=>{
        dispath({type:DELETE_MESS,payload:body.id})
    }
    return(
        <div className={bi1.item}>
            <h1>Hello, I`m bodyitem2</h1>
            <div className={bi1.item1}>
                <textarea ref={newitem}/>
                <div>
                    <button onClick={()=>Save()}>Add Message</button>
                </div>
                <div>
                    {rez}
                </div>
            </div>
        </div>
    )
}
export default Bodyitem1