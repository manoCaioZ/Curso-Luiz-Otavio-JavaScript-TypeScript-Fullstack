const produto = {nome: 'Caneca', preco: 1.8};

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))

produto.nome = 'Relogio'

console.log(produto.nome )