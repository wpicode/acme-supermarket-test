import * as React from 'react';
import {ProductsWrapperComp} from '../../components/products-wrapper';
import { actions } from '../../core/basket-app/actions';
import { connect } from 'react-redux';
import { getBasket, getProducts, getTotal } from '../../core/basket-app/selectors';


const mapStateToProps = (state: any) => {
    return {
        products: getProducts(state),
        basketItems: getBasket(state),
        total: getTotal(state)
    }
};

const mapDispatchToProps = {
    addProductAction: actions.addProduct,
    removeProductAction: actions.removeProduct
};

export const productsWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsWrapperComp)

export default productsWrapper;
