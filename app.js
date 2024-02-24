// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

let textoUsuario = '';
const reglas = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const reglasDesencriptar = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
};

let letra = '';
let textoEncriptado = '';
let textoDesencriptado = '';
let buffer = '';

function btnEncriptar() {
    document.getElementById('img').style.display = 'none';
    document.getElementById('titulo').style.display = 'none';
    document.getElementById('p-copiar').style.display = 'none';
    document.getElementById('btn-copiar').style.display = 'block';

    textoUsuario = document.getElementById('texto').value;

    for (let i = 0; i < textoUsuario.length; i++) {
        letra = textoUsuario[i];
        
        
        if (reglas.hasOwnProperty(letra)) {
            textoEncriptado += reglas[letra];
        } else {
            textoEncriptado += letra;
        }
    }
    document.getElementById('texto-encriptado').innerHTML = textoEncriptado;
    document.getElementById('texto').value = '';
}