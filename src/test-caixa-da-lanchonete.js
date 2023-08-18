import { CaixaDaLanchonete } from "./caixa-da-lanchonete.js";

//exemplo de uso do método calcularValorCompra

console.log(new CaixaDaLanchonete()
    .calcularValorDaCompra('debito', ['chantily,1']));
//Item extra não pode ser pedido sem o principal

console.log(new CaixaDaLanchonete()
    .calcularValorDaCompra('debito', ['cafe,1', 'chantily,1']));
//R$ 4,50