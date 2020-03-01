import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class ProductCategories extends Component{
    state = {
        productCategories : []
    }
    componentDidMount(){
        fetch('http://localhost/shopping-cart/product_categories.php')
        .then(res=>{ res.json().then((data)=>{ this.setState({productCategories:data}) }) })
    }


    render(){
        return(
            <section class="product-category-section">
                <div class="container" id="home-categories">

                    {this.state.productCategories.map((category,index)=>(
                        <div key={index} class="section-shadow-box hp-product-category">
                            <div class="hp-product-category__box">
                                <div class="hp-product-category__box__img">
                                    <img src={category.image} alt={category.title} />
                                </div>
                                <div class="hp-product-category__box__detail">
                                    <h4>{category.title}</h4>
                                    <p>{category.description}</p>
                                    <Link className="btn-1" to={'/Products/'+category.urlTitle}>Explore {category.title}</Link>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        )
    }
}

export default ProductCategories;