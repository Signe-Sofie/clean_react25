import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import { fetchCategoryBySlug } from "../sanity/categoryServices"


export default function SubCategory ({getProductsByCategory, products}) {

    const {SubCategory} = useParams()
    const [category, setCategory] = useState([])

    const getCategory = async (slug)=>{
        const data = await fetchCategoryByCurrentSlug(slug)
        setCategory(data[0])
    }


    useEffect(() =>{
        getCategory(subcategory)
        getProductsByCategory(category.categoryname)
    
    },[])

    return <h1>{category.categoryname}</h1>
}