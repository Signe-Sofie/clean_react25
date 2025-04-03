import { client } from "./client";

export async function fetchAllCategories(){
    const data = await client.fetch(`*[_type == 'categories]{_id, categoryname, categoryslug}`)
    return data
}

export async function fetchAllCategories() {
    const data = await client.fetch(`*[_type == 'parentcategory']{_id, title, "slug": slug.current}`)
    return data
}
