import React from 'react';
import { shallow, mount } from 'enzyme';
import { ProductsWrapperComp } from './index';

const clickFn = jest.fn();

const testProductsData = [
  {
    name: "Fruit tea",
    code: "FR1",
    price: 3.11,
    offer: "buy-one-get-one-free"
  },
  {
    name: "Strawberries",
    code: "SR1",
    price: 5.00,
    offer: "25-percent-off"
  },
  {
    name: "Coffee",
    code: "CF1",
    price: 11.23,
    offer: "none"
  }
]

const testBasketData = [
  {
    name: "Strawberries",
    code: "SR1",
    price: 5.00,
    offer: "25-percent-off"
  },
  {
    name: "Coffee",
    code: "CF1",
    price: 11.23,
    offer: "none"
  }
];

describe('productsWrapper', () => {
  it('should render productsWrapper correctly', () => {
    const component = shallow(<ProductsWrapperComp products={testProductsData} basketItems={testBasketData} />);

    expect(component).toMatchSnapshot();
  });

  it('should render Coffee product tile correctly', () => {
    const component = mount(<ProductsWrapperComp products={testProductsData} basketItems={testBasketData} />);

    const button = component.find('button#CF1');
    const productName = component.find('div#CF1');

    expect(button.text()).toEqual('Add Product');
    expect(productName.text()).toEqual('Coffee');

    component.unmount();
  });

  it('should render Fruit tea product tile correctly', () => {
    const component = mount(<ProductsWrapperComp products={testProductsData} basketItems={testBasketData} />);

    const button = component.find('button#FR1');
    const productName = component.find('div#FR1');

    expect(button.text()).toEqual('Add Product');
    expect(productName.text()).toEqual('Fruit tea');

    component.unmount();
  });

  it('should render Starberries product tile correctly', () => {
    const component = mount(<ProductsWrapperComp products={testProductsData} basketItems={testBasketData} />);

    const button = component.find('button#SR1');
    const productName = component.find('div#SR1');

    expect(button.text()).toEqual('Add Product');
    expect(productName.text()).toEqual('Strawberries');

    component.unmount();
  });

  it('should render Starberries basket item correctly', () => {
    const component = mount(<ProductsWrapperComp products={testProductsData} basketItems={testBasketData} />);

    const button = component.find('button#SR1');
    const basketItem = component.find('div#SR1basket');

    expect(button.text()).toEqual('Add Product');
    expect(basketItem.text()).toEqual('Strawberries  :  £5');

    component.unmount();
  });

  it('should render Coffee basket item correctly', () => {
    const component = mount(<ProductsWrapperComp products={testProductsData} basketItems={testBasketData} />);

    const button = component.find('button#CF1');
    const basketItem = component.find('div#CF1basket');

    expect(button.text()).toEqual('Add Product');
    expect(basketItem.text()).toEqual('Coffee  :  £11.23');

    component.unmount();
  });

});
