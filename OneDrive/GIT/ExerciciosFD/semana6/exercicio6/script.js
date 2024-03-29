// Para treinar um pouco mais requisições fetch inicie uma comunicação
//  com a API via cep (Documentação - ViaCEP - Webservice CEP e IBGE gratuito ).

//  OBS:
// Crie uma página html para imprimir o endereço através do cep.
// Utilize este endpoint: https://viacep.com.br/ws/{cep_informado}/json
// Caso a api retorne sucesso imprima em um alert o endereço formatado da seguinte 
// forma: “logradouro, complemento - bairro - localidade/uf”
// o cep_informado será passado por prompt pelo usuário.

function getEndereco () {
    let cep_informado = prompt("Informe o CEP:");

fetch(`https://viacep.com.br/ws/${cep_informado}/json`)
  .then(response => {
   return response.json();
  })
  .then(data => {
    alert (`${data.logradouro}, ${data.complemento} - ${data.bairro} - ${data.localidade}/${data.uf}`);
    })
 
  .catch(() => {
    });

//     .catch(function(error) {
//       console.log('Erro na solicitação: ' + error.message);
//     });
 }

getEndereco();