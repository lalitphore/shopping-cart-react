import React, { Component } from 'react';
import './style.css'
import logo from '../../../assets/images/logo.png'
import cartImage from '../../../assets/images/cart.svg'
import * as ACTIONS from '../../../store/actions/actions'

import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends Component{
    constructor(props){
        super(props)

        this.state = {
            activeLink : props.activeLink
        }
    }
    
    handleLogout = () =>{
        console.log('Logout')
        this.props.logout();
    }

    render(){
        return(
            <header>
                
                <div className="container header">
                    <div className="header__logo-box">
                        <img src={logo} alt="logo" className="header__logo-box__image"/></div>
                    <div className="header__nav-box">
                    <nav className="header__menu" id="header__menu">
                        <ul className="header__menu__2">
                            {
                                this.props.loggedInUserData.name ? 
                                    <li>Hi, {this.props.loggedInUserData.name}</li>
                                :
                                    ''
                            }

                            { this.props.isLoggedIn===true ? 
                                <span>
                                    <li className={this.state.activeLink==='profile' ? 'activeMenu' : ''}><Link to='/profile'>Profile</Link></li>
                                    <li className={this.state.activeLink==='logout' ? 'activeMenu' : ''}><Link to="" onClick={this.handleLogout}>Logout</Link></li>
                                </span>
                            :
                                <span>
                                    <li className={this.state.activeLink==='login' ? 'activeMenu' : ''}><Link to='/login'>Login</Link></li>
                                    <li className={this.state.activeLink==='signup' ? 'activeMenu' : ''}><Link to='/signup'>Signup</Link></li>
                                </span>
                            }
                        </ul>
                        <ul className="header__menu__1">
                            <li className={this.state.activeLink==='home' ? 'activeMenu' : ''}><Link to='/'>Home</Link></li>
                            <li className={this.state.activeLink==='products' ? 'activeMenu' : ''}><Link to="/Products">Products</Link></li>
                        </ul>
                    </nav>
                    <div className="header__cart">
                        <Link to="/Cart">
                            <img src={cartImage} alt="cart" width="40" height="40" />
                            <i className="header__cart__icon">
                                <span className="mitems cart-total">{this.props.totalProductInCart}</span> 
                            </i>
                                <span className="header__cart__items"><span className="cart-total">{this.props.totalProductInCart}</span> items</span>
                        </Link>
                        <div className="background-overlay"></div>
                        <div className="cart-container-popover">
                            <div className="cart-container"></div>
                        </div>
                    </div>
                    <div className="header__mobile-nav list-icon" id="mobile-nav-icon">&#9776;</div>
                    </div>
                </div>
            </header>
        )
    }
}

function mapStateToProps(state){
    return{
        isLoggedIn : state.loginReducer.isLoggedIn,
        loggedInUserData : state.loginReducer.loggedInUserData,
        totalProductInCart: state.cartReducer.totalProductInCart
    }
}

function mapDispatchToProps(dispatch){
    return{
        logout: () => dispatch({type:ACTIONS.LOGIN_FAILURE})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)