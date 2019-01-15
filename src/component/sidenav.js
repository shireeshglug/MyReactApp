import React from 'react';
import SideNav from 'react-simple-sidenav';
import SideItem from './sideitem';

const Sidenav = (props)=>{

    return (
        <div>
            <SideNav
            showNav = {props.showNav}
            onHideNav = {props.onHideNav}
            navStyle={{
                background : '#242424',
                maxWidth : '165px',
                opacity : 0.8
            }}
            >
            <SideItem {...props}/>
            </SideNav>
        </div>
    )
}


export default Sidenav;