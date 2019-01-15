import React , {Component} from 'react';
import { Progress } from 'semantic-ui-react';



import {
  Grid,     
  
  
} from 'semantic-ui-react';


import {  Label, Table } from 'semantic-ui-react'
 



const TableExamplePagination = () => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell style={{width:'50px'}}>Language</Table.HeaderCell>
        <Table.HeaderCell>Proficiency</Table.HeaderCell>
        <Table.HeaderCell>Affinity</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Label ribbon>Python</Label>
        </Table.Cell>
        <Table.Cell><Progress percent={60} color='blue' /></Table.Cell>
        <Table.Cell><Progress percent={90} color='red' /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Label ribbon>C++</Label>
        </Table.Cell>
        <Table.Cell><Progress percent={60} color='purple' /></Table.Cell>
        <Table.Cell><Progress percent={70} color='violet' /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Label ribbon>C</Label>
        </Table.Cell>
        <Table.Cell><Progress percent={80} color='violet' /></Table.Cell>
        <Table.Cell><Progress percent={90} color='red' /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Label ribbon>Javascript</Label>
        </Table.Cell>
        <Table.Cell><Progress percent={50} color='green' /></Table.Cell>
        <Table.Cell><Progress percent={50} color='red' /></Table.Cell>
      </Table.Row>
     
     
     
     
    </Table.Body>
    </Table>
)

class Prog extends Component{

    componentDidMount(){
        document.querySelector('#seems').innerHTML = 'Programming';
        window.scrollTo(0, 0);


    }
    render(){
        document.querySelector('#check').innerHTML = 'Coding';


        return(
            <div>
                <div style={{border:'2px outset #dfdfdf' , margin : '25px' }}>
                    <div style={{ padding:'30px' }}>
                        <h1 class="ui header">#CodeIt!</h1>
                            <p style={{ textAlign: "center" , fontStyle: "italic" ,fontSize: "20px"}}> " In order to be irreplaceable, one must always be different "<div style={{textAlign: "right" , paddingRight:'100px'}}>-Coco Chanel</div></p>
                            <div class="ui divider"></div>

                            <h2>Performance Metrics</h2>
                            <div class="column"> <h3 class="ui header">Competence</h3><div role="list" class="ui bulleted list"><div role="listitem" class="item"><p>Knowledge of basics</p></div><div role="listitem" class="item"><p>Competency with language-specific features</p></div><div role="listitem" class="item"><p>Debugging Capability</p></div><div role="listitem" class="item"><p>Program Understandability</p></div></div></div><br></br><br></br>
                            <div class="column"><h3 class="ui header">Affinity</h3><div role="list" class="ui bulleted list"><div role="listitem" class="item"><p>Language Understandability</p></div><div role="listitem" class="item"><p>Ease of Program Execution</p></div><div role="listitem" class="item"><p>Environment Setup and IDE Support</p></div><div role="listitem" class="item"><p>Documentation and Community</p></div></div></div>
                            <div class='ui horizontal divider'>Languages</div><br></br>
                                {/* <div class=''>  <Progress percent={32} color='blue' /> </div> */}
                                {TableExamplePagination()}
                                <div><br></br></div>
                                
                                <h3>Frameworks and Technologies(Tools) </h3>
                                <div class='ui divider'></div>
                              
                                <div><br></br></div>
                                <div><br></br></div>
                                

                                                            
                            <Grid columns={3} doubling centered container stackable >

                            <Grid.Column >
                            <div>   <a href="https://reactjs.org/docs/getting-started.html" class="ui medium image">
                                <img src="favicon.ico" alt=""style={{fontSize:'48px'}} />
                                <b style={{color : 'black'}}> React JS</b>
                                </a> </div>      </Grid.Column>
                            <Grid.Column>  
                            <div >   
                                <a href="https://firebase.google.com/docs" class="ui medium image">
                                <img src="firebase.png" alt=""  />
                                <b style={{color : 'black'}}> FireBase</b>
                                </a> </div>
                            </Grid.Column>
                            <Grid.Column  >
                            <div > 
                                <a href="https://firebase.google.com/docs" class="ui medium image">
                                <img src="bootstrap.png"  alt="" />
                                <b style={{color : 'black'}}>Bootstrap</b>
                                </a> </div>      </Grid.Column>
                            <Grid.Column  >
                            <div > <a href="https://react.semantic-ui.com/" class="ui medium image">
                                <img src="sem.svg" alt= "" width='48px'  height='48px'   />
                                <b style={{color : 'black'}}>Semantic UI</b>
                                </a>
                                 </div>      </Grid.Column>
                            <Grid.Column  >
                            <div >  <a href="https://devdocs.io/html/" class="ui medium image">
                                <img src="html.png"  alt="" width='48px'  height='48px'   />
                                <b style={{color : 'black' , paddingLeft:'10px'}}>HTML</b>
                                </a> </div>
                              </Grid.Column>
                             <Grid.Column  >
                            <div >  <a href="https://devdocs.io/css/" class="ui medium image">
                                <img src="css.png" alt= "" width='48px'  height='48px'   />
                                <b style={{color : 'black' , paddingLeft:'12px'}}>CSS</b>
                                </a>
                               </div>   
                           </Grid.Column>
                           
                           
                            </Grid>      
                                




                    </div>
                  
                </div>
            </div>
        )
    }
}


export default Prog ;