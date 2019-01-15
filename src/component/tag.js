import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';
const Tag = ({value})=>{

    const signal = (x) => {
        let template = ''
        switch(x){
            case 1 : template = <Link to="/" id='seems'  style={{textDecoration:'none' , color:'white' }}>Shireesh Website </Link> ; break ;
           
            default : template = '';break;
        }
        return template ; 

    }

    return(
        <div className="tagVal" > {signal(value)}  </div>
    )
}


export default Tag ;