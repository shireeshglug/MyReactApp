import React from 'react';
import './header.css';
import FontAwesome from 'react-fontawesome';
import Tag from './tag';
import Sidenav from './sidenav';

const Header = (props) => {
    
    
    const navBar = ()=>{
        return(
            <div>
                <FontAwesome name="bars"  style = {{color : '#dfdfdf', padding : '10px' , cursor : 'pointer' , fontSize : '19px'   }}  onClick={props.onOpenNav}  />
            </div>
        )

    }

    return(
        <div className = 'head'>
            <Sidenav {...props}/>
            <div> {navBar()}  </div>
            <div style={{ paddingTop  : '3.5px'}}>  <Tag value= {props.val}/> </div>
        </div>
    )

}




export default Header ; 
