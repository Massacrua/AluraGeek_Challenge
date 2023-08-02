const endpoint = "https://64c9ab01b2980cec85c257c2.mockapi.io/products"

async function getProducts() {
    const r = await fetch(endpoint)
    const produtos = await r.json()
    console.log(produtos)
    return produtos
}

export const conectaAPI = {
    getProducts
}