import {useParams} from "react-router-dom"
import { fetchAllCategories } from "../sanity/categoryServices"
import { useEffect, useState } from "react"
import { fetchProductsByParentCategory } from "../sanity/productsServices"

export default function Category(){
    const {category} = useParams()
    const [parentCategories, setParentCategories] = useState([])
        
    const getAllParentCategories = async()=>{
        const data = await fetchAllParentCategories()
        setParentCategories(data)
    }

    const getProductsByParentC = async ()=>{
        const data = await fetchProductsByParentCategory()
    }

    useEffect(()=>{
        getAllParentCategories()
    },[])

    useEffect(()=>{
        getProductsByParentC()
    },[category])


    return (
    <>
    <h1>Category, {category ? category : null}</h1>
    { category == null ?
    (<section>
        <h2>hovedkategorier</h2>
        <ul>
            {parentCategories?.map((parenc) => (
            <li key={parenc._id}>
                <Link to={parenc.slug}>{parenc.title}</Link>
            </li>))}
        </ul>
    </section>) :
    (<section>
        <h2>underkategorier: {category}</h2>
    </section>)}
  </>
  )  
 
}