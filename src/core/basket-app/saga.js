import { takeEvery, call, put, select } from 'redux-saga/effects';
import axios from 'axios';
import { actions } from './actions';
import { getProducts, getBasket } from './selectors';
import { bulkBuy, buyOneGetOneFree } from './rules';

const {
    addProductSuccess,
    addProductToBasket,
    removeProductSuccess,
    addPricingRulesSuccess
} = actions;

export function fetchProductsData() {
    return axios.get('./products.json').then(res => res.data);
}

export function fetchProductsOffer() {
    return axios.get('./pricing-rules.json').then(res => res.data);
}

export default function* sagas() {
    yield call(workerSaga)
    yield takeEvery(actions.addProduct, updateState);
    yield takeEvery(actions.removeProduct, removeProduct);
}

export function* workerSaga() {
    try {
        const response = yield call(fetchProductsData);
        const pricingRules = yield call(fetchProductsOffer);
        yield put(addPricingRulesSuccess(pricingRules))
        yield put(addProductSuccess(response))
    } catch {

    }
}

export function* updateState({ payload }: any) {
    const products = yield select(getProducts);
    const basketSelect = yield select(getBasket);

    let basket= [];

    products.forEach((product) => {
        if (payload.code === product.code) {
            basket.push(product);
        }
    });

    basket = [...basket, ...basketSelect];

    yield put(addProductToBasket(basket));

    yield call(calculateTotal, basket);
}

export function* removeProduct({ payload }: any) {
    const basketSelect = yield select(getBasket);
    basketSelect.splice(payload.index, 1);

    let basket = [...basketSelect];

    yield put(removeProductSuccess(basket));

    yield call(calculateTotal, basket);

}

export function* calculateTotal(basketProducts) {
    window.console.log('calc total');
    const priceRules: Offer[] = yield call(fetchProductsOffer);
    let total = 0;

    priceRules.forEach((rule) => {
        const filterBasket = basketProducts.filter((basket) =>
            basket.offer === rule.offer
        );

        let currTotal = 0;
        if (filterBasket.length >= 1) {
            window.console.log('rule offer:  ', rule.offer);
            switch (rule.offer) {
                case "buy-one-get-one-free": {
                    currTotal = buyOneGetOneFree(filterBasket[0].price, filterBasket.length, rule.multiplier);
                    window.console.log('currTotal b1g1f:  ' + currTotal);
                    break;
                }
                case "bulk-buy": {
                    currTotal = bulkBuy(filterBasket[0].price, filterBasket.length, rule.multiplier);
                    window.console.log('currTotal bulk:  ' + currTotal);
                    break;
                }
                default: {
                    currTotal = filterBasket[0].price * filterBasket.length;
                    window.console.log('currTotal def:  ' + currTotal);
                    break;
                }
            }
        }
        total += currTotal;
    });

    yield put(actions.setTotal(total))
}
