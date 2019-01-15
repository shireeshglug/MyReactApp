//import Layout from '../component/layout';
import React , {Component} from 'react';
import './style.css';
import 'semantic-ui/dist/semantic.min.css';
import {Link} from 'react-router-dom';
import {
  Grid,     
  
  
} from 'semantic-ui-react'

class Home extends Component{


  componentDidMount(){
    document.querySelector('#seems').innerHTML = 'Home';
  }

  

  render(){
  
   
  document.querySelector('#check').innerHTML = 'Home';
  
  



  
  return( <div>
      



    <div style={{border:'2px outset #dfdfdf' , margin : '25px' }}>

      <div><h2 class="ui top attached header">Welcome to Shireesh Website !</h2><div class="ui attached segment"> Fell free to use the sidebar or click on any of the below cards to visit !</div></div>
   
      
      <Grid columns={3} doubling centered container stackable>

      <Grid.Column >
      <div >  < Link  to = '/user'class="ui centered card" style={{width:'350px' , marginTop:'25px'   }}><img src="final2.jpeg"  alt= '' class="ui image" /><div class="content"><div class="header">Who am I ?</div><div class="meta"><span class="date">Introduction</span></div><div class="description">What I think about myself</div></div></Link> </div>      </Grid.Column>
      <Grid.Column>  
      <div >  < Link  to = '/edu'class="ui centered card" style={{width:'350px' , marginTop:'25px' ,}}><img src="../book.jpg" style={{height : '390px'}} alt='' class="ui image" /><div class="content"><div class="header">Education</div><div class="meta"><span class="date">Knowledge is Power</span></div><div class="description">High school , Undergrade and Certificates</div></div></Link> </div>      </Grid.Column>
      <Grid.Column  >
      <div >  < Link  to = '/code'class="ui centered card" style={{width:'350px' , marginTop:'25px' ,}}><img src="../fifa.jpg"  style={{height : '390px'}} alt=''   class="ui image" /><div class="content"><div class="header">What can I do ! </div><div class="meta"><span class="date">Coding skills</span></div><div class="description">Things I've learned to do so far</div></div></Link> </div>      </Grid.Column>
      <Grid.Column  >
      <div >  < Link  to = '/project'class="ui centered card" style={{width:'350px' , marginTop:'25px' , marginBottom:'10px'}}><img src="../project.jpg" alt='' class="ui image"  /><div class="content"><div></div><div class="header">What have I made ! </div><div class="meta"><span class="date">Projects</span></div><div class="description">Whatever I have build</div></div></Link> </div>      </Grid.Column>
      <Grid.Column >
      <div >  < Link  to = '/social'class="ui centered card" style={{width:'350px' , marginTop:'25px' , marginBottom:'10px'}}><img src="social.jpg" alt='' class="ui image" /><div class="content"><div class="header">Social Media</div><div class="meta"><span class="date">Facebook , Instagram ..,</span></div><div class="description"></div></div></Link> </div>      </Grid.Column>
      
    </Grid>      
      

    </div>
    </div>
  )
}}

export default Home ;