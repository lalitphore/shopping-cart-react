import React, { Component } from 'react'
import Header from '../../includes/Header'


class Signup extends Component{
    render(){
        return(
            <div>
                <Header activeLink="signup" />
                <section>
                        <div class="container signup-box">
                            <div class="signup-box__details">
                            <div class="login-box__details__heading">
                                <h3>Signup</h3>
                            </div>
                            <div class="signup-box__details__desc">
                                <p>We donot share your personal details with anyone</p>
                            </div>
                            </div>
                            <div class="signup-box__form">
                            <form action="#" method="post" autocomplete="off">
                                <div class="signup-box__form__group"><input id="firstname" required="required" name="firstname" placeholder=""/> <span class="highlight"></span> <span class="bar"></span> <label for="firstname">First Name</label></div>
                                <div class="signup-box__form__group"><input id="last_name" required="required" name="last_name" placeholder=""/> <span class="highlight"></span> <span class="bar"></span> <label for="last_name">Last Name</label></div>
                                <div class="signup-box__form__group"><input type="email" id="email" required="required" name="email" placeholder=""/> <span class="highlight"></span> <span class="bar"></span> <label for="email">Email</label></div>
                                <div class="signup-box__form__group"><input type="password" id="password" required="required" name="password" placeholder=""/> <span class="highlight"></span> <span class="bar"></span> <label for="password">Password</label></div>
                                <div class="signup-box__form__group"><input type="password" id="cpassword" required="required" name="cpassword" placeholder=""/> <span class="highlight"></span> <span class="bar"></span> <label for="cpassword">Confirm Password</label></div>
                                <div class="signup-box__form__group"><button type="submit" name="signup">Signup</button></div>
                            </form>
                            </div>
                        </div>
                    </section>
            </div>
        )
    }
}

export default Signup