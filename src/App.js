import * as React from 'react';
import './App.css';
import ProductsWrapper from './containers/products';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ProductsWrapper/>
      </div>
    );
  }
}

export default App;
