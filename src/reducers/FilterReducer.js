import { ProductList } from "../pages/Products/ProductList";

export const filterReducer = (state,action) => {
    const {type, payload} = action;

    switch(type){
        case 'PRODUCT_LIST': return { productList: payload.products}
        case 'SORT_BY': return
        case 'RATINGS': return
        case 'BEST_SELLER': return {...state, bestSellerOnly: payload.bestSellerOnly}
        case 'IN_STOCK': return
        case 'CLEAR_FILTER': return
        default: throw new Error("No Case Found")
    }
}