import React from 'react'
import b from './body.module.css'
import Bodyitem1 from "./Bodyitem1";
import Bodyitem3 from "./Bodyitem3";

const Body=(props)=>{

    return(
        <div className={b.body}>
            <Bodyitem3 props={props}/>
            <Bodyitem1/>
        </div>
    )
}
export default  Body