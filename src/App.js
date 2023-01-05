import React, {useState} from 'react';
import './App.css';
import AddProductForm from './components/AddProductForm';
import ProductContainer from './components/ProductContainer';

function App() {

  const [products, setProducts] = useState([])

  const addProduct = (title, price) => {
    setProducts([...products, {
      id: Date.now(),
      title: title,
      price: price,
    }])
  }

  return (
    <div>
      <AddProductForm addProduct={addProduct}/>
      <ProductContainer products={products}/>
    </div>
  );
}

export default App;
