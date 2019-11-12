import reducer from './reducer';
import { initialState } from './reducer'

const testInitialState = {
    data: {
        products: [],
        basket: [],
        offers: [],
        total: 0
    }
};

const productsTestData = [
    {
        name: "Fruit tea",
        code: "FR1",
        price: 3.11,
        offer: "buy-one-get-one-free"
    }
];

const pricingRuleTestData = [
    {
        offer: "buy-one-get-one-free",
        productsNum: 2,
        multiplier: 0.5,
        calculation: "%"
    }
];

describe('REDUCER', () => {
    it('should return initial state', () => {
        expect(initialState).toEqual(testInitialState)
    });

    it('should handle "ADD_PRODUCT" action', () => {
        expect(reducer({}, { type: 'ADD_PRODUCT' })).
            toEqual({})
    })

    it('should handle "ADD_PRODUCT_SUCCESS" action', () => {
        expect(reducer({}, { type: 'ADD_PRODUCT_SUCCESS', payload: { products: productsTestData} })).
            toEqual({data: { products: productsTestData}})
    })

    it('should handle "ADD_PRICING_RULES_SUCCESS" action', () => {
        expect(reducer({}, { type: 'ADD_PRICING_RULES_SUCCESS', payload: { offers: pricingRuleTestData} })).
            toEqual({data: { offers: pricingRuleTestData}})
    })

    it('should handle "ADD_PRODUCT_TO_BASKET" action', () => {
        expect(reducer({}, { type: 'ADD_PRODUCT_TO_BASKET', payload: { products: productsTestData} })).
            toEqual({data: { basket: productsTestData}})
    })

    it('should handle "REMOVE_PRODUCT_SUCCESS" action', () => {
        expect(reducer({}, { type: 'REMOVE_PRODUCT_SUCCESS', payload: { products: productsTestData} })).
            toEqual({data: { basket: productsTestData}})
    })
});