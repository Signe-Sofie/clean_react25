import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { fetchAllProducts, fetchProductsByCategories } from './sanity/productsServices'
import { fetchAllCategories } from './sanity/categoryServices'
import Category from './components/Category'
import Product from './components/Product'
import Home from './components/Home'

function App() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  const getAllProducts = async()=>{
    const data = await fetchAllProducts()
    setProducts(data)
  }

  const getAllCategories = async () =>{
    const data = await fetchAllCategories()
    setCategories(data)
  }

  const getProductsByCategory = async (cat) => {
    const data = await fetchProductsByCategories(cat)
    setProducts(data)
  }

  useEffect(()=>{
    getAllProducts()
    getAllCategories()
  }, [])

  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<Home products={products} categories={categories} getProductsByCategory={getProductsByCategory}/>} />
        <Route path="product/:product" element={<Product />} />
        <Route path="category/:category" element={<Category />} />
      </Routes>
    </Layout>

    </>
  )
}

export default App
