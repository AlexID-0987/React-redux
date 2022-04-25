import b2 from "./body.module.css";
import React from "react";

const Bodycomponent2=(props)=>{

    return(
        <div className={b2.item}>
            <img src='https://cf2.ppt-online.org/files2/slide/f/Fhq9ivxby1B7JRn0HO5rMQfNaW6pg32PYdK4I8/slide-0.jpg'/>
            <h1>{props.item}</h1>
        </div>
    )
}
export default Bodycomponent2