import React from 'react';
import { shallow, mount } from 'enzyme';
import { BasketItem } from './index';

const testBasketItems =
{
    name: "Strawberries",
    code: "SR1",
    price: 5.00,
    offer: "25-percent-off"
}

describe('product', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<BasketItem productName={testBasketItems.name}
            productCode={testBasketItems.code}
            productPrice={testBasketItems.price} />);

        expect(component).toMatchSnapshot();
    });
});
