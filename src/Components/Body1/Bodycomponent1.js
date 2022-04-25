import b1 from "./body.module.css";
import React from "react";

const Bodycomponent1=(props)=>{

    return(
        <div className={b1.item}>
            <img src='https://spottingit.com/wp-content/uploads/2018/11/Social-networks-are-a-reality-that-every-company-must-know-how-to-manage-in-a-very-personalized-way.jpg'/>
            {props.item}
        </div>
    )
}
export default Bodycomponent1