import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Index from './pages/Index'
import About from './pages/About'

import Navbar from './components/Navbar'

import './main.scss'

class App extends Component{
    render(){
        return(
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path='/' component={Index}/>
                    <Route path='/about' component={About}/>
                </Switch>
            </Router>
        );
    }
}

export default App;