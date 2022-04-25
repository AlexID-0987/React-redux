import React from 'react'
import n from '../Navbar/navbar.module.css'
import {NavLink} from "react-router-dom";
const Navbar=()=>{
    const stylenav=({isActive})=>{
        return{
           color:isActive? 'gold':'white',
           fontWeight:isActive? 'bold':'normal'
        }
    }

    return(
        <div className={n.item}>
            <div className={n.item1}>
                <div>
                    <NavLink to='/Body' style={stylenav}>Message</NavLink>
                </div>
                <div>
                    <NavLink to='/Body1'style={stylenav}>Peoples</NavLink>
                </div>
                <div>
                    <NavLink to='Body2' style={stylenav}>News</NavLink>
                </div>
            </div>
        </div>
    )
}
export default  Navbar