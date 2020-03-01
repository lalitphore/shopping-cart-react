import React, { Component } from 'react';
import Header from '../../includes/Header'
import Carousel from '../../includes/Carousel'
import ProductCategories from '../../includes/ProductCategories'

class Home extends Component{
    render(){
        return(
            <div className="home-page">
                <Header activeLink="home"/>
                <Carousel />
                <ProductCategories />
            </div>
        )
    }
}

export default Home