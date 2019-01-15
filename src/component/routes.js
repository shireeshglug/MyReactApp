import React , {Component} from 'react';
import {Route} from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import Prog from '../pages/program';
import Edu from '../pages/edu';
import Project from '../pages/project';
import Social from '../pages/social';
//import Time from '../pages/timeline';
//import Tag from './tag';


class Rou extends Component{
   
    render(){
        return(
            <div>
                
                <Route path="/"  exact component={ Home }  />
                <Route path="/edu" exact component= {Edu}/>
                <Route path="/user"  exact component={About} /> 
                <Route path="/project" exact  component={Project} />
                <Route path="/social" exact  component={Social} />
                <Route path="/code" exact  component={Prog} />
                <Route path="/git" exact component = {()=>{window.open( 'https://github.com/shireeshglug/shireeshglug').then(window.location='/')}} /> 


            </div>
        )
    }
}


export  default  Rou  ;


// <Route
//   path='/dashboard'
//   render={(props) => <Dashboard {...props} isAuthed={true} />}
// />

// <Route
//   path='/dashboard'
//   component={() => <Dashboard isAuthed={true} />}
// />