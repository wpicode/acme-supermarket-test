//import { cloneableGenerator } from 'redux-saga/utils';
import { put, call, select } from 'redux-saga/effects';
import { workerSaga, fetchProductsData, fetchProductsOffer, updateState, calculateTotal, removeProduct } from './saga';
import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { actions } from './actions';
import { getBasket, getOffers, getProducts } from './selectors';

describe('workerSaga', () => {
    it('should fetch products data and call actions for putting into store', () => {
        testSaga(workerSaga)
            .next()
            .call(fetchProductsData)
            .next()
            .call(fetchProductsOffer)
            .next()
            .put(actions.addPricingRulesSuccess())
            .next()
            .put(actions.addProductSuccess())
            .next()
            .isDone()
    });
});

describe('updateState saga', () => {
    it('should update state by adding product to basket', () => {
        const payload = {
            code: 'FR1'
        }

        const productsTestData = [
            {
                name: "Fruit tea",
                code: "FR1",
                price: 3.11,
                offer: "buy-one-get-one-free"
            }
        ];

        expectSaga(updateState, {payload})
        .select(getProducts)
        .select(getBasket)
        .put(actions.addProductSuccess({products: productsTestData}))
        .call(calculateTotal)
        .run()
    });
});

describe('removeProduct saga', () => {
    const payload = {
        code: 'FR1'
    }
    const productsTestData = [
        {
            name: "Fruit tea",
            code: "FR1",
            price: 3.11,
            offer: "buy-one-get-one-free"
        }
    ];
    it('should remove product from basket', () => {
        expectSaga(removeProduct, {payload})
        .select(getBasket)
        .put(actions.removeProductSuccess({productsTestData}))
        .call(calculateTotal)
        .run()
    });
});