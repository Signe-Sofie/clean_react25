export default function CategoryButtons({category, getProductsByCategory}){
    return (
        <button onClick={()=> etProductsByCategory(category.category.name)}>
            {category.categoryname}
        </button>
    )
}