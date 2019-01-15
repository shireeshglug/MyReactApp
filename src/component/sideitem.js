import React from 'react';
import './header.css';
import FontAwesome from 'react-fontawesome';
import {Link , Route} from 'react-router-dom';




const SideItem = (props)=>{
    return(<div>
        <div className='option'>
            <Link to='/' onClick={props.onHideNav} >
                <FontAwesome name='home' style={{ fontSize : '20px' , paddingLeft : '4px' , paddingBottom : '2px', color : 'white'}}/>
                <div style={{color:'white' }} > Home</div>
                
            </Link>

           

        </div>
        <div className='option'>
            <Link to='/edu' onClick={props.onHideNav}  className='edu'>
                <FontAwesome name='mortar-board' style={{ fontSize : '20px' , paddingLeft : '0px' , paddingBottom : '2px', color : 'aqua'}}/>
                <div style={{color:'white' }}> Education</div>
                
            </Link>

           

        </div>
        <div className='option'>
            <Link to='/user' onClick={props.onHideNav}>
                <FontAwesome name='user' style={{ fontSize : '20px' , paddingLeft : '6px' , paddingBottom : '2px', color : 'white'}}/>
                <div style={{color:'white' }}> About</div>
                
            </Link>

           

        </div>
        <div className='option'>
            <Link to='/project' onClick={props.onHideNav}>
                <FontAwesome name='code' style={{ fontSize : '20px' , paddingLeft : '6px' , paddingBottom : '2px', color : 'white'}}/>
                <div style={{color:'white' }}> Project</div>
                
            </Link>

           

        </div>
        <div className='option'>
            <Link to='/code' onClick={props.onHideNav}>
                <FontAwesome name='terminal' style={{ fontSize : '20px' , paddingLeft : '6px' , paddingBottom : '2px', color : 'white'}}/>
                <div style={{color:'white' }}> Programming</div>
                
            </Link>
            <Route path="/code" exact  />

           

        </div>
        <div className='option'>
            <Link to='/social' onClick={props.onHideNav}>
                <FontAwesome name='globe' style={{ fontSize : '20px' , paddingLeft : '8px' , paddingBottom : '2px', color : 'white'}}/>
                <div style={{color:'white' }}> SocialMedia</div>
                
            </Link>

           

        </div>
        <div className='option'>
            <Link to='git' onClick={props.onHideNav}>
                <FontAwesome name='github' style={{ fontSize : '30px' , paddingLeft : '8px' , paddingBottom : '2px', color : 'limegreen'}}/>
                <div style={{color:'white'}}> SourceCode</div>
                
            </Link>

           

        </div>
        

        <div className='option'>   

        </div>
       

        </div>
    )

}


export default SideItem ; 