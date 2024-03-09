// Crie um método chamado de MostrarEstoque() dentro da 
// classe Produto.

// Este método deve exibir uma mensagem parecida com a 
// seguinte:

// “O produto CANETA BIC AZUL possui 5 unidades disponíveis”

// Crie um método chamado Repor() dentro da classe Produto.

// Este método deve receber como parâmetro a quantidade 
// reposta e adicionar o montante à quantidade do produto.


class Produto {
    nome;
    preco;
    quantidade
    

constructor(valorNome, valorPreco, valorQuantidade){ //constructor dentro da classe
this.nome = valorNome
this.preco = valorPreco
this.quantidade = valorQuantidade
}

vender(quantidadeVendida){
    if(quantidadeVendida > this.quantidade) {console.log("Estoque Insuficiente")
return  //return significa que para aqui. 
}
this.quantidade -= quantidadeVendida // é o mesmo que  this.quantidade = this.quantidade - quantidadeVendida        }
if(quantidadeVendida>1) {console.log (`Houve a venda de ${quantidadeVendida} unidades de ${this.nome}`)}
else{console.log (`Houve a venda de ${quantidadeVendida} unidade de ${this.nome}`)}
}

repor(quantidadeReposta){
        this.quantidade += quantidadeReposta
      }

mostrarEstoque(){
        if(this.quantidade>1){
            console.log(`O produto ${this.nome} possui ${this.quantidade} unidades disponíveis)`)
        } 
        else if(this.quantidade == 0) {
            console.log(`O produto ${this.nome} está com estoque zerado`)
        } 
        else {console.log(`O produto ${this.nome} possui ${this.quantidade} unidade disponíveL)`)}

      }
    }

