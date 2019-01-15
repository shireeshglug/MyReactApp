import React , {Component} from 'react';
import {Redirect} from 'react-router-dom';

class Project extends Component{


    componentDidMount(){
        document.querySelector('#seems').innerHTML = 'Project';


    }
    Alert = ()=>{
        alert('Project Section Under Maintaince');
      } 
    render(){
        document.querySelector('#check').innerHTML = 'Project';


        return(
            <div>
                <Redirect to='/' />
                {this.Alert()}
                
            </div>
        )
    }
}


export default Project ;