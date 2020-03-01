import * as ACTION_TYPES from '../actions/actionTypes'

const initialState = {
    totalPriceOfCart:0,
    totalProductInCart : 0,
    productsInCart : [],
    randomId : 1
}

const cartReducer = (state=initialState , action) => {
    let totalCartPrice = 0;
    if(action.payload){
        Object.keys(action.payload).map((productId,index)=>{
            totalCartPrice+=action.payload[productId].totalPrice
        })
    }


    switch(action.type.type){
        case ACTION_TYPES.ADD_TO_CART:
            let totalProduct = Object.keys(action.payload).length
            return{
                ...state,
                productsInCart:action.payload,
                totalProductInCart:totalProduct,
                totalCartPrice:totalCartPrice,
                randomId : Math.random(100)
            }
        case ACTION_TYPES.UPDATE_PRODUCT_QUANTITY_IN_CART:
            return{
                ...state,
                productsInCart:action.payload,
                totalProductInCart:Object.keys(action.payload).length,
                totalCartPrice:totalCartPrice,
                randomId : Math.random(100)
            }
        default :
            return state
    }
}

export default cartReducer