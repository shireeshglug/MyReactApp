import React , {Component} from 'react';
import Header from './header';
import Rou from '../component/routes';

class Layout extends Component{
    state = {
        showNav : false ,
        value : 1
    }
    
    togglesidenav = (action) =>{
        this.setState({
            showNav : action 
        })
    }

    

    render(){
        return(
            <div>
                <Header  
                showNav = {this.state.showNav}
                onHideNav = {()=>this.togglesidenav(false)}
                onOpenNav = {()=> this.togglesidenav(true)}
                val = {this.state.value}                
                />
                <Rou/>
            </div>
        )
    }
}


export default Layout ;
