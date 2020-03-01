import React, { Component } from 'react'
import Header from '../../includes/Header'

import * as ACTIONS from '../../../store/actions/actions'
import { connect } from 'react-redux'


class Login extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            invalidEmail:'',
            isLoggedIn:false,
            loginError:'',
            loggedInUserData:{}
        }
    }

    validEmail = (event) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value))
        {
            this.setState({invalidEmail:''})
        }
        else
        {
            this.setState({invalidEmail:'Invalid Email Id'})
        }
    }
    handleLoginResponse = (response) =>{
        console.log('response',response)
    }

    handleSubmit = (event) => {
        this.setState({isLoggedIn:true})
        let self = this;
        event.preventDefault()
        fetch('http://localhost/shopping-cart/login.php', {
            method: 'POST',
            headers : new Headers(),
            body: JSON.stringify({'email':event.target.email.value,'password':event.target.password.value})
        }).then(function(response) {
            response.json().then((res)=>{
               if(res.success===true){
                    self.props.action1(res)
                    self.props.history.push("/");
               }else{
                   self.setState({loginError : res.data})
               }
            });
        })
    }


    render(){
        return(
            <div>
                <Header activeLink="login" />
                <section>
                    <div className="container login-box">
                        <div className="login-box__details">
                        <div className="login-box__details__heading">
                            <h3>Login</h3>
                        </div>
                        <div className="login-box__details__desc">
                            <p>Get access to your Orders, Wishlist and Recommendation</p>
                        </div>
                        </div>
                        <div className="login-box__form">
                        <p style={{color:'green'}}>{this.props.isLoggedIn===true ? 'Logged In Successfully' : ''}</p>
                        <p style={{color:'red'}}>{this.state.loginError ? this.state.loginError : ''}</p>
                        <form onSubmit={this.handleSubmit} method="post" autoComplete="off">
                            <div className="login-box__form__group">
                                <input type="email" onChange={this.validEmail} id="email" required="required" name="email" placeholder=""/> <span className="highlight"></span> <span className="bar"></span> <label htmlFor="email">Email</label>
                                <div className="error">{this.state.invalidEmail}</div>
                            </div>
                            <div className="login-box__form__group"><input type="password" id="password" required="required" name="password" placeholder=""/> <span className="highlight"></span> <span className="bar"></span> <label htmlFor="password">Password</label>
                                <div className="error">{this.state.invalidPassword}</div>
                            </div>
                            <div className="login-box__form__group"><button type="submit" name="login">Login</button></div>
                        </form>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        isLoggedIn : state.loginReducer.isLoggedIn
    }
}

function mapDispatchToProps(dispatch){
    return {
        action1: (response) => dispatch({type:ACTIONS.LOGIN_SUCCESS,payload:response}),
        action2: () => dispatch({type:ACTIONS.LOGIN_FAILURE})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login)