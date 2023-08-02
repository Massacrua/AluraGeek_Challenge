const endpoint = "https://64c9ab01b2980cec85c257c2.mockapi.io/products"

async function getProducts() {
    const conexao = await fetch(endpoint)
    const produtos = await conexao.json()
    console.log(produtos)
    return produtos
}

async function criaNovoProduto(nome, preco, categoria, descricao, imageurl) {
    const conexao = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            categoria: categoria,
            preco: preco,
            descricao: descricao,
            imageurl: imageurl
        })
    })
    if (!conexao.ok) {
        throw new Error("Não foi possível criar o produto")
    }

    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
}

export const conectaAPI = {
    getProducts,
    criaNovoProduto
}