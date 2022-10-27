//Primeiro criamos uma função para receber o CEP digitado

function consultaEndereço(){
    let cep = document.querySelector('#cep').value; //Pega o cep digitado

    //Se digitados menos de 8 números, devolve um alerta
    if (cep.length !== 8){
        alert("CEP Inválido");
        return;
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`; //busca o CEP

    // Executa a requisição
    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarEndereço(data);
        })

    })
}

// Criamos aqui uma função para apresentar os dados

function mostrarEndereço(dados){
    let resultado = document.querySelector('#resultado');
    
    // Escolhemos apenas os dados que queremos apresentar ao usuário
    resultado.innerHTML = `<p> Endereço: ${dados.logradouro}<p>
                           <p> Bairro: ${dados.bairro}<p>
                           <p> Cidade: ${dados.localidade} / ${dados.uf}<p>`
}