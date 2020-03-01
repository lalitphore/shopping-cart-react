import React, { Component } from 'react'
import {Router,Route} from 'react-router'

import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import ProductList from './components/pages/ProductList'
import Cart from './components/pages/Cart'
import history from './utils/history'

class Routes extends Component{
    render(){
        return(
            <div>
                <Router history={history}>
                    <div>
                        <Route path="/" exact component={Home}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/Signup" component={Signup} />
                        <Route path="/Products" exact component={ProductList} />
                        <Route path="/Cart" exact component={Cart} />
                        <Route path="/Products/:id" exact render={(props)=><ProductList {...props}/>} />
                    </div>
                </Router>
            </div>
        )
    }
}

export default Routes