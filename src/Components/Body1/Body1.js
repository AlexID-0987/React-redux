import React from "react";
import b from '../Body1/body.module.css'
import Bodycomponent1 from "./Bodycomponent1";
const Body1=(props)=>{
    let body1item=props.state.map(m=><Bodycomponent1 item={m.message}/>)
    return(
        <div>
            {body1item}
        </div>

    )
}
export default Body1