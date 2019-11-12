import React from 'react';
import { shallow, mount } from 'enzyme';
import { Product } from './index';

const addProduct = jest.fn();

const testProductData = {
  productName: "Fruit tea",
  productCode: "FR1",
  productPrice: 3.11,
  addProduct: addProduct
}

describe('product', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Product productName={testProductData.productName}
      productCode={testProductData.productCode}
      productPrice={testProductData.productPrice}
      addProduct={addProduct} />);

    expect(component).toMatchSnapshot();
  });


  it('should call addProduct when button is clicked', () => {
    const component = mount(<Product productName={testProductData.productName}
      productCode={testProductData.productCode}
      productPrice={testProductData.productPrice}
      addProduct={addProduct} />);

    const button = component.find('button#FR1').simulate('click');
    expect(addProduct).toHaveBeenCalled();
    component.unmount();
  });

  it('should render correct product', () => {
    const component = mount(<Product productName={testProductData.productName}
      productCode={testProductData.productCode}
      productPrice={testProductData.productPrice}
      addProduct={addProduct} />);

    const productName = component.find('div#FR1');
    expect(productName.text()).toEqual('Fruit tea');
  });
});
