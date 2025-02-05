async function pegarEndereco(){
    const cep = document.getElementById('cep')
    
    const rua = document.getElementById('street')
    const estado = document.getElementById('state')
    const cidade = document.getElementById('city')
    const bairro = document.getElementById('neighborhood')

    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                document.querySelector(".hidden").style.display = 'block';
                return;
            }
    
            rua.value = data.logradouro;
            estado.value = data.uf
            cidade.value = data.localidade
            bairro.value = data.bairro
    }).catch(err => {
        cep.style.border = '1px solid rgba(255, 0, 0, 0.68)';
        document.querySelector(".hidden").style.display = 'block';
        console.error('Erro ao buscar o endereço:', err);
        
    })
}

