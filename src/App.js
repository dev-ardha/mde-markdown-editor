import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Index from './pages/Index'
import About from './pages/About'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Helmet } from 'react-helmet'

import './main.scss'

class App extends Component{
    render(){
        return(
            <Router>
                <Helmet>
                    <link rel="icon" href="../public/favicon.ico" />
                </Helmet>
                <Navbar/>
                <Switch>
                    <Route exact path='/' component={Index}/>
                    <Route path='/about' component={About}/>
                </Switch>
                <Footer/>
            </Router>
        );
    }
}

export default App;