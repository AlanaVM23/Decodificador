const entrada_texto = document.querySelector('.entrada_texto');
const saida_texto = document.querySelector('.saida_texto');
const conteudo_inicial = document.querySelector('.conteudo_inicial');
const resposta = document.querySelector('.resposta');

function atualizarVisibilidade() {
    if (saida_texto.value.trim() !== '') {
        conteudo_inicial.style.display = 'none'; 
        resposta.style.display = 'block'; 
    } else {
        conteudo_inicial.style.display = 'block'; 
        resposta.style.display = 'none'; 
    }
}

function btnCriptografar() {
    const textoCriptografado = criptografar(entrada_texto.value);
    saida_texto.value = textoCriptografado;
    entrada_texto.value = '';
    atualizarVisibilidade(); 
}

function btnDescriptografar() {
    const textoDescriptografado = descriptografar(entrada_texto.value);
    saida_texto.value = textoDescriptografado;
    entrada_texto.value = '';

}

function criptografar(stringCriptografada) {
    let substituir = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringCriptografada = stringCriptografada.toLowerCase();

    for (let i = 0; i < substituir.length; i++) {
        stringCriptografada = stringCriptografada.replaceAll(substituir[i][0], substituir[i][1]);
    }
    return stringCriptografada;
}

function descriptografar(stringDescriptografada) {
    let substituir = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringDescriptografada = stringDescriptografada.toLowerCase();

    for (let i = 0; i < substituir.length; i++) {
        stringDescriptografada = stringDescriptografada.replaceAll(substituir[i][1], substituir[i][0]);
    }
    return stringDescriptografada;
}

function btnCopiar() {
    const texto = document.getElementById('saida');
    texto.select();

    navigator.clipboard.writeText(texto.value)
        .catch(err => {
            console.error('Erro ao copiar o texto: ', err);
        });
}
