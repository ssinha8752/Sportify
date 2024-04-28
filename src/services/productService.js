export async function getProductList(searchTerms){
    const response=await fetch(`http://localhost:8000/444/products?name_like=${searchTerms?searchTerms:""}`)
      const data = await response.json();
      return data;
}

export async function getProduct(id){
    const response=await fetch(`http://localhost:8000/444/products/${id}`)
    const data = await response.json();
    return data;
}

export async function getFeaturedList(){
    const response = await fetch(`http://localhost:8000/444/featured_products`);
      const data = await response.json()
      return data;
}