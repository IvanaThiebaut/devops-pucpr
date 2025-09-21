const { produtos, filtrarProdutosPorPreco, ordenarProdutos } = require('../produtos.js');

describe('Testes da função filtrarProdutosPorPreco', () => {
    it('deve retornar produtos com preço igual ou menor que 90', () => {
    
        const resultado = filtrarProdutosPorPreco(produtos, 90);
        expect(resultado.length).toBe(2);
    });

    it('deve retornar todos os produtos se o preço for alto', () => {
        const resultado = filtrarProdutosPorPreco(produtos, 200);
        expect(resultado.length).toBe(3);
    });

    it('deve retornar um array vazio se o preço for muito baixo', () => {
        const resultado = filtrarProdutosPorPreco(produtos, 50);
        expect(resultado.length).toBe(0);
    });

    it('deve incluir o produto se o preço máximo for igual ao seu preço', () => {
        const resultado = filtrarProdutosPorPreco(produtos, 70);
        expect(resultado.length).toBe(1);
    });
});

describe('Testes da função ordenarProdutos', () => {
    it('deve ordenar os produtos por preço ascendente', () => {
        const produtosOrdenados = ordenarProdutos(produtos, 'asc');
        expect(produtosOrdenados[0].nome).toBe('Caneca Rústica'); 
        expect(produtosOrdenados[produtosOrdenados.length - 1].nome).toBe('Vaso Terracota'); 
    });

    it('deve ordenar os produtos por preço descendente', () => {
        const produtosOrdenados = ordenarProdutos(produtos, 'desc');
        expect(produtosOrdenados[0].nome).toBe('Vaso Terracota'); 
        expect(produtosOrdenados[produtosOrdenados.length - 1].nome).toBe('Caneca Rústica');
    });
});