import { actions } from './actions'

const {
    addProduct,
    addProductSuccess,
    addPricingRulesSuccess,
    addProductToBasket,
    removeProduct,
    removeProductSuccess
} = actions;

describe('ACTIONS', () => {
    it('should create addProduct Action with correct type', () => {

        const expectedAction = {
            type: 'ADD_PRODUCT',
            payload: {
                code: undefined
            }
        }
        expect(addProduct()).toEqual(expectedAction)
    });

    it('should create addProductSuccess Action with correct type', () => {

        const expectedAction = {
            type: 'ADD_PRODUCT_SUCCESS',
            payload: {
                products: undefined
            }
        }
        expect(addProductSuccess()).toEqual(expectedAction)
    })

    it('should create addPricingRulesSuccess Action with correct type', () => {

        const expectedAction = {
            type: 'ADD_PRICING_RULES_SUCCESS',
            payload: {
                offers: undefined
            }
        }
        expect(addPricingRulesSuccess()).toEqual(expectedAction)
    })

    it('should create addProductToBasket Action with correct type', () => {

        const expectedAction = {
            type: 'ADD_PRODUCT_TO_BASKET',
            payload: {
                code: undefined
            }
        }
        expect(addProductToBasket()).toEqual(expectedAction)
    })

    it('should create removeProduct Action with correct type', () => {

        const expectedAction = {
            type: 'REMOVE_PRODUCT',
            payload: {
                code: undefined
            }
        }
        expect(removeProduct()).toEqual(expectedAction)
    })

    it('should create removeProductSuccess Action with correct type', () => {

        const expectedAction = {
            type: 'REMOVE_PRODUCT_SUCCESS',
            payload: {
                code: undefined
            }
        }
        expect(removeProductSuccess()).toEqual(expectedAction)
    })
})