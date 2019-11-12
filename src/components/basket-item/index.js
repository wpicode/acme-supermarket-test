import * as React from 'react';
import './basketItem.css';

interface StateProps {
  productName: string,
  productPrice: number,
  productCode: string
}

export const BasketItem: React.FunctionComponent<StateProps> = ({
  productName,
  productPrice,
  productCode
}) =>
  (
    <div className="basket-list">
      <div className="basket-list-item">
          <div id={productCode+'basket'} >{productName}  :  £{productPrice}</div>
      </div>
    </div>
  )
