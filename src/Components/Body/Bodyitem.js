import React from 'react'
import bi from '../Body/bodyitem.module.css'

const Bodyitem=(props)=>{
    return(
        <div className={bi.item}>
            <h1>I`m item</h1>
            {props.name1}
        </div>
    )
}
export default Bodyitem