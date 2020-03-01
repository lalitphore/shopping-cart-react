import React, { Component } from 'react'
import Header from '../../includes/Header'

import { connect } from 'react-redux'
import * as ACTIONS from '../../../store/actions/actions'


class Cart extends Component{
    state = {
        totalPrice : 0
    }
    updateCart = (productId,type) =>{
        let product = this.props.productsInCart
        if(type==='add')
        {
            product[productId].total++
            product[productId].totalPrice = product[productId].json.price * product[productId].total
        }
        else
        {
            product[productId].total--
            product[productId].total===0 ? delete product[productId] : product[productId].totalPrice = product[productId].json.price * product[productId].total
        }
        this.props.updateProductQunatityInCart(product)
    }
    render(){
        console.log(this.props.productsInCart)
        return(
            <div>
                <Header activeLink="cart" />
                <div className="container">
                    <section className="cart-container__items" data-randomNumber={this.props.randomId}>
                        <h3 className="cart-container__items__heading">My Cart</h3> (<span className="cart-total">{this.props.totalProductInCart}</span> Item)
                    </section>
                    <section className="cart-products">
                        
                        {
                        Object.keys(this.props.productsInCart).map((jsonKey,index)=>(
                            
                            <div className="cart-product" key={index}>
                                <div className="cart-product__image">
                                    <img src={this.props.productsInCart[jsonKey].json.image} alt={this.props.productsInCart[jsonKey].json.title} />
                                </div>
                                <div className="cart-product__info">
                                    <div className="cart-product__info__heading"><h4>{this.props.productsInCart[jsonKey].json.title}</h4></div>
                                    <div className="cart-product__info__details">
                                        <div className="cart-product__info__details__quantity-box">
                                            <button onClick={()=>this.updateCart(jsonKey,'remove')} className="cart-prod-btn minus js-minus js-manage-cart">−</button>
                                            <span className="cart-prod-qnty product-quantity">{this.props.productsInCart[jsonKey].total}</span>
                                            <button onClick={()=>this.updateCart(jsonKey,'add')} className="cart-prod-btn plus js-plus js-manage-cart">+</button>
                                            <span className="prod-multiply">✕</span>
                                            <span className="prod-price" id="">{this.props.productsInCart[jsonKey].json.price}</span>
                                        </div>
                                        <div className="cart-product__info__details__price">
                                            Rs <span className="product-total-price">{this.props.productsInCart[jsonKey].totalPrice}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>

                    <section className="cart-container__items cart-addon">
                        <div className="cart-addon__image">
                            <img src="/lowest-price.png" alt="Lowest price image"/>
                        </div>
                        <div className="cart-addon__details">
                            <p>You won't find it cheaper anywhere</p>
                        </div>
                    </section>

                    <section className="cart-container__items cart-checkout">
                        <div className="cart-checkout__info">
                            <p>Promo code can be applied on payment page</p>
                            <button type="button" className="cart-checkout__info__btn" >
                                <span className="cart-checkout__info__btn__left">Checkout</span>
                                <span className="cart-checkout__info__btn__right">Rs <span className="product-cart-total-price">{this.props.totalCartPrice}</span> <i className="arrow-icon right-arrow-icon"></i></span>
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        totalProductInCart: state.cartReducer.totalProductInCart,
        productsInCart:state.cartReducer.productsInCart,
        randomId:state.cartReducer.randomId,
        totalCartPrice:state.cartReducer.totalCartPrice
    }
}

function dispatchStateToProps(dispatch){
    return{
        updateProductQunatityInCart: (product) => {
            dispatch({type:ACTIONS.UPDATE_PRODUCT_QUANTITY_IN_CART,payload:product})
        }
    }
}

export default connect(mapStateToProps,dispatchStateToProps)(Cart)