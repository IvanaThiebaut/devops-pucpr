const produtos = [
    { id: 1, nome: 'Vaso Terracota', preco: 120.00, imagem: 'imagens/vaso-moderno-terracota.jpg', alt: 'Vaso de cerâmica terracota' },
    { id: 2, nome: 'Prato Esfumado', preco: 85.00, imagem: 'imagens/prato-esfumado.jpg', alt: 'Prato de cerâmica com efeito esfumado' },
    { id: 3, nome: 'Caneca Rústica', preco: 70.00, imagem: 'imagens/caneca-rustica.jpg', alt: 'Caneca de cerâmica rústica' }
];

function filtrarProdutosPorPreco(listaDeProdutos, precoMaximo) {
    return listaDeProdutos.filter(p => p.preco <= precoMaximo);
}

function ordenarProdutos(listaDeProdutos, direcao = 'asc') {
    // pra eu nao mudar o org, eu vou criar uma copia
    const listaCopiada = [...listaDeProdutos]; 
    if (direcao === 'asc') {
        return listaCopiada.sort((a, b) => a.preco - b.preco);
    } else {
        return listaCopiada.sort((a, b) => b.preco - a.preco); 
    }
}

function renderizarProdutos(listaProdutos) {
    const galeria = document.getElementById('product-gallery');
    if (!galeria) return;

    galeria.innerHTML = ''; 
    listaProdutos.forEach(produto => {
        const item = document.createElement('div');
        item.className = 'product-item';
        item.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.alt}">
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preco.toFixed(2).replace('.', ',')}</p>
        `;
        galeria.appendChild(item);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    
    if (document.getElementById('product-gallery')) {
        const filtroPreco = document.getElementById('filtro-preco');
        const precoMaxValor = document.getElementById('preco-max-valor');
        const btnOrdenarMenor = document.getElementById('btn-ordenar-menor');
        const btnOrdenarMaior = document.getElementById('btn-ordenar-maior');

        let direcaoAtualDaOrdenacao = 'asc'; 

        function atualizarExibicao() {
            const precoMaximoAtual = parseFloat(filtroPreco.value);
            
            let produtosFiltrados = filtrarProdutosPorPreco(produtos, precoMaximoAtual);
            
            let produtosFinais = ordenarProdutos(produtosFiltrados, direcaoAtualDaOrdenacao);
            
            renderizarProdutos(produtosFinais);
        }

        filtroPreco.addEventListener('input', () => {
            precoMaxValor.textContent = filtroPreco.value;
            atualizarExibicao();
        });

        btnOrdenarMenor.addEventListener('click', () => {
            direcaoAtualDaOrdenacao = 'asc'; 
            atualizarExibicao(); 
        });

        btnOrdenarMaior.addEventListener('click', () => {
            direcaoAtualDaOrdenacao = 'desc'; 
            atualizarExibicao(); 
        });

        atualizarExibicao();
    }
});

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        produtos,
        filtrarProdutosPorPreco,
        ordenarProdutos
    };
}