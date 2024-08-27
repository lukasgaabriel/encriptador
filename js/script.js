document.getElementById("encrypt-btn").addEventListener("click", function() {
    const inputText = document.getElementById("input-text").value;
    const encryptedText = encryptText(inputText);
    document.getElementById("output-text").value = encryptedText;
});

document.getElementById("decrypt-btn").addEventListener("click", function() {
    const inputText = document.getElementById("input-text").value;
    const decryptedText = decryptText(inputText);
    document.getElementById("output-text").value = decryptedText;
});

document.getElementById("copy-btn").addEventListener("click", function() {
    const outputText = document.getElementById("output-text");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles!");
});

function encryptText(text) {
    let result = text.toLowerCase();
    result = result.replace(/e/g, "enter");
    result = result.replace(/i/g, "imes");
    result = result.replace(/a/g, "ai");
    result = result.replace(/o/g, "ober");
    result = result.replace(/u/g, "ufat");
    return result;
}

function decryptText(text) {
    let result = text.toLowerCase();
    result = result.replace(/enter/g, "e");
    result = result.replace(/imes/g, "i");
    result = result.replace(/ai/g, "a");
    result = result.replace(/ober/g, "o");
    result = result.replace(/ufat/g, "u");
    return result;
}
