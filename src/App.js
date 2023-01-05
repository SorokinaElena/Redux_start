import React, {useState} from 'react';
import './App.css';
import AddProductForm from './components/AddProductForm';
import ProductContainer from './components/ProductContainer';
import { Context } from './context';

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
      <Context.Provider value={{products, addProduct, deleteProduct}}>
        <AddProductForm />
        <ProductContainer />
      </Context.Provider>
    </div>
  );
}

export default App;
