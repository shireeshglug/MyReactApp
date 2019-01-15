import React , {Component} from 'react';
import {Redirect} from 'react-router-dom';


class Time extends Component{
    render(){
        document.querySelector('#seems').innerHTML = 'TimeLine';
        document.querySelector('#check').innerHTML = 'Story';


        return(
            <div>
                <Redirect to = '/' />
            </div>
        )
    }
}


export default Time ;