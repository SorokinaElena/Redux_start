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

  const deleteProduct = (id) => {
    setProducts(products.filter(el => el.id !== id))
  }

  return (
    <div>
      <AddProductForm addProduct={addProduct}/>
      <ProductContainer products={products} deleteProduct={deleteProduct}/>
    </div>
  );
}

export default App;
