import React from 'react'
import b2 from '../Body2/body.module.css'
import Bodycomponent2 from "./Bodycomponent2";

const Body2=(props)=>{
let bodyitem2=props.state.map(i=><Bodycomponent2 item={i.item}/>)
    return(
        <div>
            {bodyitem2}
        </div>
    )
}
export  default Body2