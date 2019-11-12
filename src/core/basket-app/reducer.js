
import { handleActions, ReducerMap } from 'redux-actions'

export const initialState = {
    data: {
        products: [],
        basket: [],
        offers: [],
        total: 0
    }
};

export const reducers = {
    ['ADD_PRODUCT_SUCCESS']: (
        state,
        { payload: { products } }
    ) => ({
        ...state,
        data: {
            ...state.data,
            products: products
        }
    }),
    ['ADD_PRICING_RULES_SUCCESS']: (
        state,
        { payload: { offers } }
    ) => ({
        ...state,
        data: {
            ...state.data,
            offers: offers
        }
    }),
    ['ADD_PRODUCT']: state => ({
        ...state
    }),
    ['ADD_PRODUCT_TO_BASKET']: (
        state,
        { payload: { products } }
    ) => ({
        ...state,
        data: {
            ...state.data,
            basket: products
        }
    }),
    ['REMOVE_PRODUCT_SUCCESS']: (
        state,
        { payload: { products } }
    ) => ({
        ...state,
        data: {
            ...state.data,
            basket: products
        }
    }),
    ['SET_TOTAL']: (
        state,
        {payload: { total }}
    ) => ({
        ...state,
        data: {
            ...state.data,
            total: total
        }
    })
}


export default handleActions(reducers, initialState)
