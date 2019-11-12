import * as React from 'react';
import './product.css';

interface StateProps {
  productName: string,
  productPrice: number,
  productCode: string,
  addProduct: (code: string) => void
}

export const Product: React.FunctionComponent<StateProps> = ({
  productName,
  productPrice,
  productCode,
  addProduct
}) =>
{
    let classNameButton = "add-to-cart add-to-cart-"+productCode;
    return (
      <div className="product-item-wrapper">
        <div className="product-item">
          <div>
            <div id={productCode} className="product-name">{productName}</div>
            <div className="location">£{productPrice}</div>
          </div>
        </div>
          <div>
            <button id={productCode} value={productCode} className={classNameButton} onClick={() => addProduct(productCode)}>
              {"Add Product"}
            </button>
          </div>
      </div>
    )
};
