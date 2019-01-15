import React , {Component} from 'react';
import RouterDOM from 'react-dom';
import Layout from './component/layout';
import {BrowserRouter  } from 'react-router-dom';

import './index.css';



class App extends Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Layout/>                
                </BrowserRouter>
            </div>
        )
    }
}


RouterDOM.render(<App/> , document.querySelector('#root'));

