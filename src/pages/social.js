import React , {Component} from 'react';
import {Grid} from 'semantic-ui-react';
  
class Social extends Component{
    componentDidMount(){
        document.querySelector('#seems').innerHTML = 'Social Connect';
        window.scrollTo(0, 0) ;


    }
    render(){
        document.querySelector('#check').innerHTML = 'Social';


        return(
            <div>
                    <div style={{border:'2px outset #dfdfdf' , margin : '25px' }}>
                    <div style={{padding:'20px'}}>
                        <h2><i>Social Media</i></h2><div></div>
                        <h3>Feel free to drop a message</h3>

                        <div class='ui divider'></div>

                    
                    

                    <Grid columns={3} doubling centered container stackable  style={{paddingBottom:'20px'}}>

                        <Grid.Column >
                        <div >  < a  href = 'https://www.facebook.com/profile.php?id=100008166938868'class="ui centered card" style={{width:'250px' ,marginTop:'25px'}}><img src="f.png" height='250px' alt= '' class="ui image" /><div class="content"><div class="meta"><span class="date">Facebook</span></div></div></a> </div>      </Grid.Column>
                        <Grid.Column>  
                        <div >  < a  href = 'https://www.instagram.com/shireesh_kumar/'class="ui centered card" style={{width:'250px' , marginTop:'25px' ,}}><img src="insta.png"  height='250px'  alt='' class="ui image" /><div class="content"><div class="meta"><span class="date">Instagram</span></div></div></a> </div>      </Grid.Column>
                        <Grid.Column  >
                        <div >  < a  href = 'https://www.linkedin.com/in/shireesh-kumar/'class="ui centered card" style={{width:'250px' , marginTop:'25px' ,}}><img src="in.png"  height='250px'  alt=''   class="ui image" /><div class="content"><div class="meta"><span class="date">LinkedIn</span></div></div></a> </div>      </Grid.Column>
                        
                    </Grid>

                    <br></br><br></br>
                <div>
                    {/* Message */}
                    

                </div>    
                    
                </div>


                
                </div>

               

            </div>
        )
    }
}


export default Social ;