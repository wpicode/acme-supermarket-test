import { createAction } from "redux-actions";

export const actions = {
    addProduct: createAction("ADD_PRODUCT", (code:string) => ({code})),
    addProductSuccess: createAction("ADD_PRODUCT_SUCCESS", (products:[]) => ({products})),
    addPricingRulesSuccess: createAction("ADD_PRICING_RULES_SUCCESS", (offers:[]) => ({offers})),
    addProductToBasket: createAction("ADD_PRODUCT_TO_BASKET", (products: []) => ({products})),
    removeProduct: createAction("REMOVE_PRODUCT", (index: number) => ({index})),
    removeProductSuccess: createAction("REMOVE_PRODUCT_SUCCESS", (products:[]) => ({products})),
    setTotal: createAction("SET_TOTAL", (total: number) => ({total}))
}
