function criarProduto(produto, preco) {
    return {
        produto,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('leite', 2.95));