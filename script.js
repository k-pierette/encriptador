// Declaración de variables
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const copyBtn = document.getElementById('copy-btn');
const validationMessage = document.getElementById('validation-message');

// Función de validación
function validarEntrada(texto) {
    const regex = /^[a-z\s]*$/;
    return regex.test(texto);
}

// Función de encriptación
function encriptar(texto) {
    let textoEncriptado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    return textoEncriptado;
}

// Función de desencriptación
function desencriptar(texto) {
    let textoDesencriptado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    return textoDesencriptado;
}

// Función para copiar texto
function copiarTexto() {
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}

// Eventos de botones
encryptBtn.addEventListener('click', () => {
    const texto = inputText.value;
    if (validarEntrada(texto)) {
        validationMessage.textContent = '';
        const textoEncriptado = encriptar(texto);
        outputText.value = textoEncriptado;
    } else {
        validationMessage.textContent = 'Solo se permiten letras minúsculas y espacios.';
    }
});

decryptBtn.addEventListener('click', () => {
    const texto = inputText.value;
    if (validarEntrada(texto)) {
        validationMessage.textContent = '';
        const textoDesencriptado = desencriptar(texto);
        outputText.value = textoDesencriptado;
    } else {
        validationMessage.textContent = 'Solo se permiten letras minúsculas y espacios.';
    }
});

copyBtn.addEventListener('click', copiarTexto);
