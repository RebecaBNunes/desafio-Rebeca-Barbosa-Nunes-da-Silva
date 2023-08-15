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

        if (produtos.length === 0) {
            return 'Não há itens no carrinho de compra!';
        }

        for (let produto of produtos) {
            const { quantidade } = produto;
            if (quantidade === 0) {
                return 'Quantidade inválida!';
            }
            if (produto.produto === 'chantily') {
                const principal = produtos.find((item) => item.produto === 'cafe');
                if (!principal) {
                    return 'Item extra não pode ser pedido sem o principal';
                }
            } else if (produto.produto === 'queijo') {
                const principal = produtos.find((item) => item.produto === 'sanduiche');
                if (!principal) {
                    return 'Item extra não pode ser pedido sem o principal';
                }
            }

            const item = this.itensCardapio.find((item) => item.codigo === produto.produto);
            if (!item) {
                return 'Item inválido!';
            }
            valorTotal += item.preco * quantidade;
        }

        const [dinheiro, debito, credito] = this.formatoPagamentoValido;

        if (metodoDePagamento === dinheiro) {
            valorTotal -= valorTotal * 5 / 100;
        } else if (metodoDePagamento === credito) {
            valorTotal += valorTotal * 3 / 100;
        }

        const valorTotalFormatado = (`R$ ${(valorTotal / 100).toFixed(2)}`).replace('.', ',');
        return valorTotalFormatado;
    }
}

export { CaixaDaLanchonete };


