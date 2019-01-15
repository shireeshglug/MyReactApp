import React , {Component} from 'react';
//import RouterDOM from 'react-dom';


//import Tag from '../component/tag';



class About extends Component{


    componentDidMount(){
        document.querySelector('#seems').innerHTML = 'About Me !';
        window.scrollTo(0, 0) ;


    }


    render(){
      
        document.querySelector('#check').innerHTML = 'About';
        
        
            
        

        return(
            <div>
                
                <div style={{border:'2px outset #dfdfdf' , margin : '25px' }}>
                   <div style={{ padding:'30px' }}>
                        <h1 class="ui header">About Me</h1>
                        <div class="ui divider"></div>
                            <p style={{ textAlign: "center" , fontStyle: "italic" ,fontSize: "20px"}}> " Happiness can be found, even in the darkest of times, if one only remembers to turn on the light."<div style={{textAlign: "right" , paddingRight:'100px'}}>-J K Rowling</div></p>
                        <div class="ui horizontal divider">End obligatory quote</div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p>
                            <h3 style={{textAlign:'center' , fontStyle:'italic'}}><b>Tell us something about yourself</b></h3>
                            <br></br>
                            <div style={{fontStyle:'italic' , fontSize:'20px'}} >
                            Hey !  I'm Shireesh , Passionate Engineer , Coder , Machine Learning Enthusiast and a Tech Geek (In love with the technology )
                            <br></br><br></br>
                            Gallivanter , Music Lover and a xGuitarist .<br></br><br></br>
                            Capricorn Born - As it's meaning well suits me  i.e., being determined , practical and helpful . 
                                                        
                            </div>
                            <div class="ui  divider" >
                            </div>

                            <h3>
                            Things i admire ..,

                            </h3>

                            <div>
                            <div>
                                <img src="GOt.jpeg" alt="" style={{ width:'300px' , height:'350px' , border:'2px outset #dfdfdf' , padding:'2.5px'}} class="ui tiny top   aligned image" />
                                    <div> <b>GAME OF THRONES</b> <br></br>A Show full of suspence and drama , based on the book 'A Song Of Ice and Fire '. One of the best tv show i've ever watched and eagerly wating for its final season</div>
                                <div class="ui divider"></div>
                                <img src="friends.jpeg" alt="" class='ui centered image' style={{ width:'300px' , height:'350px' , border:'2px outset #dfdfdf' , padding:'2.5px',paddingRight:'3px' }}  class="ui tiny middle aligned image"/>
                                <div><b><i>F.R.I.E.N.D.S</i></b><br></br>The first ever tv show i'd watched , the best english sitcom ever
                                <br></br>Full of fun and entertainment . My favorite character is  Chandeler who is well know for his sarcastic jokes <br></br><br></br> </div><div class="ui divider"></div><img src="Pubg.jpeg" alt="" class='ui centered image' style={{ width:'300px' , height:'350px' , border:'2px outset #dfdfdf' , padding:'1.5px' }}  class="ui tiny bottom aligned image"/> <div><b>PUBG</b><br></br>A revolutionary game ,  played lot with friends (addictive but fun).</div></div>
                           
                           
                            </div>
                            <div class="ui divider"></div>


                            <div>There are lot more to add here,but for now this are the few  that top the list </div>

                        </p>

                        

                        


                   </div>


                </div>

                
            </div>
        )
    }
}




export default About ;