import {useParams} from "react-router-dom"
import { fetchAllCategories, fetchCategoryBySlug } from "../sanity/categoryServices"
import { useEffect, useState } from "react"
import { fetchProductsByParentCategory } from "../sanity/productsServices"

export default function Category(){
    const {category} = useParams()
    const [parentCategories, setParentCategories] = useState([])
    const [categoryId, setcategoryId] = useState([])
    const [categories, setCategories] = useState([])
        
    const getAllParentCategories = async()=>{
        const data = await fetchAllParentCategories()
        setParentCategories(data)
    }

    const getProductsByParentC = async (id)=>{
        const data = await fetchProductsByParentCategory(id)
        setCategories(data)
    }

    const getCategoryBySlug = async(slug) =>{
        const data = await fetchCategoryBySlug(slug)
        setCategoryId(data[0]._id)
    }

    useEffect(()=>{
        getAllParentCategories()
        
    },[])

    useEffect(()=>{
        getProductsByParentC(categoryId)
        getCategoryBySlug(category)
    },[category, categoryId])


    return (
    <>
    <h1>Category, {category ? category : null}</h1>
    { category == null ?
    (<section>
        <h2>Hovedkategorier</h2>
        <ul>
            {parentCategories?.map((parenc) => (
            <li key={parenc._id}>
                <Link to={parenc.slug}>{parenc.title}</Link>
            </li>))}
        </ul>
    </section>) :
    (<section>
        <h2>Underkategorier: {category}</h2>
        <ul>
            {categories?.map(cat => <li key={cat.id}><Link to={cat.categoryslug.current}>{cat.categoryname}</Link></li>)}
        </ul>
    </section>)}
  </>
  )  
 
}