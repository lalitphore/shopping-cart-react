import React from 'react'

const ProductGrid = (props) =>{
    return(
        <div className="plp-container__products__item"  >
            <div className="plp-container__products__item__title">
                <h4>{props.title}</h4>
            </div>
            <div className="plp-container__products__item__image">
                    <img src={props.image} alt={props.title} />
            </div>
            <div className="plp-container__products__item__details">
                <p>
                    {props.description}
                </p>
                <div className="plp-container__products__item__price">
                    <button type="button" onClick={()=>props.addProductToCart(props)} className="btn-1 add-to-cart">Buy Now <span className="price">Rs {props.price}</span></button>
                </div>
            </div>
        </div>
    )
}

export default ProductGrid