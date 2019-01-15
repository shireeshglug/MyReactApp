import React , {Component} from 'react';
//import Header from '../component/header';
//import Rou from '../component/';
import 'semantic-ui/dist/semantic.min.css';
//import { Dropdown } from 'semantic-ui-react';
//import {Link} from 'react-router-dom';
import {  Label,  Table } from 'semantic-ui-react';

import {
  Grid,     
  
  
} from 'semantic-ui-react'





class Card extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  render() {
    return (
      <div>
        <div  onClick={this.showMenu}>
          semester-wise grade
        </div>
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <div> 
                <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Semester</Table.HeaderCell>
        <Table.HeaderCell>CGP</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Label ribbon>First</Label>
        </Table.Cell>
        <Table.Cell>8.8</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Label ribbon>Second</Label>
        </Table.Cell>
        <Table.Cell>8.2</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Label ribbon>Third</Label>
        </Table.Cell>
        <Table.Cell>8.7</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Label ribbon>Fourth</Label>
        </Table.Cell>
        <Table.Cell>8.8</Table.Cell>
      </Table.Row>
     
    </Table.Body>  
    </Table>
                 </div>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

class Edu extends Component{


    componentDidMount(){
        document.querySelector('#seems').innerHTML = 'Education';
        window.scrollTo(0, 0);


    }


    render(){



        document.querySelector('#check').innerHTML = 'Education';


        
        
        return(
            <div>
                <div style={{border:'2px outset #dfdfdf' , margin : '25px' }}>
                <div style={{ padding:'30px' }}>
                        <h1 class="ui header">Education</h1>
                        <div class="ui horizontal divider"> Knowledge is Power</div>

      
    <Grid columns={3} doubling centered container stackable>

      <Grid.Column >
      <div >  < div  class="ui centered card" style={{width:'350px' , marginTop:'25px'   }}><img src="school.jpeg"   alt= '' class="ui image" /><div class="content"><div class="header">Soundarya High School</div><div class="meta"><span class="date">High School</span></div><div class="description">Graduated 2013 </div></div></div> </div>      </Grid.Column>
      <Grid.Column>  
      <div >  < div  class="ui centered card" style={{width:'350px' , marginTop:'25px' ,}}><img src="puc.jpeg"  alt='' class="ui image" /><div class="content"><div class="header">Vidya Mandir </div><div class="meta"><span class="date">Senior Secondary School</span></div><div class="description">Graduated 2016 </div></div></div> </div>      </Grid.Column>
      <Grid.Column  >
      <div >  < div  class="ui centered card" style={{width:'350px' , marginTop:'25px' ,}}><img src="reva.jpeg"   alt=''   class="ui image" /><div class="content"><div class="header">Reva University</div><div class="meta"><span class="date">Undergraduate</span></div><div class="description">Graduation 2020( Yet to be )</div></div></div> </div>      </Grid.Column>
      
    </Grid>      
      
                   
                </div>
                <div class='ui divider' style={{paddingBottom : '20px'}}></div>

                <div class="ui one column grid">
                <div class="column">
                <div class="ui raised segment">

                <a class="ui red ribbon label" style={{fontSize:'20px'}}>Undergraduate</a>
                <div role="list" class="ui bulleted list">
                    <div role="listitem" class="item">Reva University , Bangalore</div>
                    <div role="listitem" class="item">2016 - 2020</div>
                    <div role="listitem" class="item">Degree : Bachelor in Technology</div>
                    <div role="listitem" class="item">Major  : Computer Science and Engineering</div>
                    <div role="listitem" class="item"><Card /><i class="angle down icon" style={{display:'inline'}}></i></div>

                </div>
                        <img src="" class="ui image"/>
                        <a class="ui blue ribbon label" style={{fontSize:'20px'}}>Senior Secondary School</a><div>

                    <div role="list" class="ui bulleted list">
                    <br></br>
                        <div role="listitem" class="item">Vidya Mandir</div>
                        <div role="listitem" class="item">2013 - 2016</div>
                        <div role="listitem" class="item">Combination : Physics , Chemistry , Mathematics and Computer Science</div>
                        <div role="listitem" class="item">95.0% (PCMC only) <br></br><br></br></div>
                    </div>
                     

                        </div>
                        <img src="" class="ui image"/>

                        <a class="ui green ribbon label" style={{fontSize:'20px'}}>High School</a>
                    <div>
                        <div></div>
                        <div role="list" class="ui bulleted list">
                    <div role="listitem" class="item">Soundarya School</div>
                    <div role="listitem" class="item">2003 - 2013</div>
                    <div role="listitem" class="item"> Combination: Science, Social Studies, Mathematics, English </div>
                    <div role="listitem" class="item">Language : English </div>
                    <div role="listitem" class="item">93.76%</div>


                </div>
                     
                    </div>
                        <img src="" class="ui image"/>
                </div>

                <br></br>

                </div>

                </div>

               
                </div>
                <div style={{border:'2px outset #dfdfdf' , margin : '25px' }}>
                <div style={{ padding:'30px' }}>
                        <h1 class="ui header">Certification</h1>
                        <div class='ui divider'></div>
                        <div class="ui cards"><div class="ui card"><div class="content"><div class="header">Microsoft Technology Associate </div><div class="meta">MTA</div><div class="description">Cloud Fundamentals</div></div></div></div>
                </div >
                
                </div>


                
            </div>
        )
    }
}


export default Edu ;




