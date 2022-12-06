import './App.css';
import React, { useState, useEffect } from 'react'
import Inventory from './components/Inventory';
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar';
import { getProducts } from './api';
import { FavoriteProvider } from './contexts/SoldContext';

function App() {

  const [products, setProducts] = useState([])

  const [loading, setLoading] = useState(true)
  
  const [sold, setSold] = useState([])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const data = await getProducts()
      setProducts(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const updateSoldProducts = (title) => {
    const updated = [...sold]
    const isSold = updated.indexOf(title)
    if(isSold >= 0) {
      updated.splice(isSold, 1)
    } else {
      updated.push(title)
    }
    setSold(updated)
  }

  return (
    <FavoriteProvider 
      value={{
        soldProducts: sold,
        updateSoldProducts: updateSoldProducts
      }}
    >
      <div>
        <Navbar />
        <div className="App">
          <Searchbar />
            <Inventory 
              loading={loading}
              products={products}
            />
        </div>
      </div>
    </FavoriteProvider>
  );
}

export default App;
