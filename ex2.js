
/**
* Crie um programa que utilize os valores do objeto pessoa e imprima uma string no seguinte formato:
*   
*   João Silva recebe R$ 2000. Após contabilizar suas despesas, ele ainda possui R$ 550 reais sobrando. 
*
* Faça mais testes trocando os valores da variável do objeto pessoa.
*  
*/

let pessoa = {
  nome: 'João',
  sobrenome: 'Silva',
  salario: 2000,
  despesas: {
      contas: 550,
      aluguel: 700,
      poupanca: 200
  }
};

const contabilidade = (pessoa) => {
  let soma = pessoa.despesas.contas + pessoa.despesas.aluguel + pessoa.despesas.poupanca;
  let saldo = pessoa.salario - soma;
  console.log(pessoa.nome + " " + pessoa.sobrenome + " recebe R$ " + pessoa.salario + ". Após contabilizar suas despesas, seu saldo é de R$ " + saldo)
  }
  
contabilidade(pessoa);