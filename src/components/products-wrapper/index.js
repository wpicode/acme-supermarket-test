import * as React from 'react';
import './productsWrapper.css';
import { Product } from '../product';
import { BasketItem } from '../basket-item';


interface StateProps {
    products: object,
    basketItems: object,
    total: number
}

interface DispatchProps {
    addProductAction: (code: string) => void,
    removeProductAction: (code: number) => void
}

type ContentProps = DispatchProps & StateProps;

export class ProductsWrapperComp extends React.Component<ContentProps> {
    render() {
        const {
            addProductAction,
            removeProductAction,
            products,
            basketItems,
            total
        } = this.props;
        let basketRemove;
        return (
            <div className="content">
                <div className="basket">
                    {basketItems.map((basketItem, index) =>{
                      basketRemove = "basket-remove basket-remove-"+basketItem.code;
                      return (
                        <div className="basket-item">
                            <BasketItem
                                productName={basketItem.name} productPrice={basketItem.price} productCode={basketItem.code}
                            />
                            <button className={basketRemove} id={basketItem.code+"remove"} value={index} onClick={() => removeProductAction(index)}>
                                {"Remove"}
                            </button>
                        </div>
                    )}
                    )}

                    <h1 className="total">Total: £<span className="total-sum">{total}</span></h1>
                </div>
                <div className="products">
                    {products.map(product =>
                        <Product productName={product.name} key={product.code} productPrice={product.price} productCode={product.code}
                            addProduct={addProductAction} />
                    )}
                </div>
            </div>
        );
    }
}

export default ProductsWrapperComp;
