import React, { Component } from 'react'
import Header from '../../includes/Header'
import ProductGrid from '../../atoms/ProductGrid'

import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import * as ACTIONS from '../../../store/actions/actions'
import Apis from '../../../envirnoment_api'


class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products : [],
            productCategories:[],
            filteredProducts:[],
            currentCategory:false,
            productsInCart : {}
        }
        this.addProductToCart = this.addProductToCart.bind(this)
      }
    
    
    componentDidMount(){
        
        fetch(Apis.products).then((res)=>{ res.json().then((data)=>{ 
            this.setState({products:data}) 
            this.props.match.params.id ? this.getCategoryProducts(this.props.match.params.id) : this.setState({currentCategory:false})
        }) })

        fetch(Apis.productCategories).then((res)=>{ res.json().then((data)=>{ this.setState({productCategories:data}) }) })

    }


    getCategoryProducts(catId){
        this.setState({currentCategory:catId})
        
        let filteredProducts = this.state.products.filter((product)=>{
            return product.category === catId
        });
        this.setState({filteredProducts : filteredProducts}) 
    }

    addProductToCart(productJson){
        let product = this.props.productsInCart
        if(product[productJson.id]) {
            product[productJson.id].total++ 
            product[productJson.id].totalPrice = product[productJson.id].totalPrice * product[productJson.id].total
        }else{
            product[productJson.id] = {'total':1,'json':productJson,totalPrice:productJson.price}
        }
        console.log(product)
        this.props.addToCart(product)
    }

    render(){
        
        return(
            <div>
                <Header activeLink="products" />
                <section className="plp-container container">
                    <aside className="plp-container__sidebar">
                        <nav>
                            <ul className="plp-container__sidebar__categories" id="product-categories">
                                {this.state.productCategories.map((category,index)=>(
                                    <li key={index} className={this.state.currentCategory === category.urlTitle ? 'active' : ''}><Link onClick={()=>this.getCategoryProducts(category.urlTitle)} to={'/Products/'+category.urlTitle}>{category.title}</Link></li>
                                ))}    
                            
                            </ul>
                            <div id="mobile-accordion-icon" className="plp-container__sidebar__mobile-icon"><i className="down-arrow-icon arrow-icon"></i></div>
                        </nav>
                    </aside>
                    <div className="plp-container__products" id="products-grid">
                    {
                        this.state.filteredProducts.length > 0 ?
                                this.state.filteredProducts.map((product,index)=>(
                                    <ProductGrid id={product.id} price={product.price} title={product.name} image={product.imageURL} key={index} description={product.description} addProductToCart={this.addProductToCart} />
                            ))
                        :
                        this.state.products.map((product,index)=>(
                                <ProductGrid  id={product.id} price={product.price} title={product.name} image={product.imageURL} key={index} description={product.description} addProductToCart={this.addProductToCart}/>
                        ))
                    }
                    </div>
                </section>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        productsInCart : state.cartReducer.productsInCart,
        totalProductInCart: state.cartReducer.totalProductInCart
    }
}

function dispatchStateToProps(dispatch){
    return{
        addToCart: (product) => { 
            dispatch({type:ACTIONS.ADD_TO_CART,payload:product}) 
        }
    }
}

export default connect(mapStateToProps,dispatchStateToProps)(ProductList)