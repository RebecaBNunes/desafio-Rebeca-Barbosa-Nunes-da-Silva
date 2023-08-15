class CaixaDaLanchonete {

    itensCardapio = [{ codigo: 'cafe', preco: 300 }, { codigo: 'chantily', preco: 150 }, { codigo: 'suco', preco: 620 }, { codigo: 'sanduiche', preco: 650 }, { codigo: 'queijo', preco: 200 }, { codigo: 'salgado', extra: '', preco: 725 }, { codigo: 'combo1', extra: '', preco: 950 }, { codigo: 'combo2', extra: '', preco: 750 }];
    formatoPagamentoValido = ['dinheiro', 'debito', 'credito'];

    calcularValorDaCompra(metodoDePagamento, itens) {
        let valorTotal = 0;
        if (!this.formatoPagamentoValido.includes(metodoDePagamento)) {
            return 'Forma de pagamento inválida!';
        }
        const produtos = [];
        for (let i = 0; i < itens.length; i++) {
            const posicaoVirg = itens[i].indexOf(',');
            const produto = itens[i].slice(0, posicaoVirg);
            const quantidade = Number(itens[i].slice(posicaoVirg + 1));
            produtos.push({
                produto,
                quantidade
            });
        }

    }
}

export { CaixaDaLanchonete };


