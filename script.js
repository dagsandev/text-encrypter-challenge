const divShowTextContainer = document.querySelector(".textarea-response-container");
const divGirlContainer = document.querySelector(".girl-container");
const textareaResponse = document.getElementById("textareaResponse");

divShowTextContainer.style.visibility = "collapse";

function hideElement(){
    let text = document.getElementById("textareaResponse").value;

    if(!text){
        divShowTextContainer.style.visibility = "collapse";
        divGirlContainer.style.visibility = "visible";
    } else {
        divGirlContainer.style.visibility = "collapse";
        divShowTextContainer.style.visibility = "visible";
    }
}

function textVerify(){
    let textareaRequest = document.getElementById("textareaRequest").value;
    if(/[A-ZÁÉÍÓÚáéíóú]/.test(textareaRequest)) {
        alert("The text cannot contain capital letters or accent marks.");
        return false;
    }
    return true;
}

function encryptText(){
    let verify = textVerify();

    if (!verify){
        return;
    }

    let textareaRequest = document.getElementById("textareaRequest").value;

    let textareaRequestEncrypted = textareaRequest.replace(/e/g, 'enter');
    textareaRequestEncrypted = textareaRequestEncrypted.replace(/i/g, 'imes');
    textareaRequestEncrypted = textareaRequestEncrypted.replace(/a/g, 'ai');
    textareaRequestEncrypted = textareaRequestEncrypted.replace(/o/g, 'ober');
    textareaRequestEncrypted = textareaRequestEncrypted.replace(/u/g, 'ufat');

    document.getElementById("textareaResponse").value = textareaRequestEncrypted;
    hideElement();
}


function decryptText(){
    let verify = textVerify();
    if(!verify){
        return;        
    }

    let textareaRequest = document.getElementById("textareaRequest").value;

    let textareaRequestDecrypted = textareaRequest.replace(/enter/g, 'e')
    textareaRequestDecrypted = textareaRequestDecrypted.replace(/imes/g, 'i');
    textareaRequestDecrypted = textareaRequestDecrypted.replace(/ai/g, 'a');
    textareaRequestDecrypted = textareaRequestDecrypted.replace(/ober/g, 'o');
    textareaRequestDecrypted = textareaRequestDecrypted.replace(/ufat/g, 'u');

    document.getElementById("textareaResponse").value = textareaRequestDecrypted;
    hideElement();    
}

function copyText() {
    let text = document.getElementById("textareaResponse");  
    text.select();  
    navigator.clipboard.writeText(text.value);
  
    alert("The following text has been copied: " + text.value);
}

document.getElementById("encrypt-button").addEventListener("click", encryptText);
document.getElementById("decrypt-button").addEventListener("click", decryptText);
document.getElementById("btnCopy").addEventListener("click", copyText);

//for mobile:
document.getElementById("decrypt-button").addEventListener("touchend", decryptText);
document.getElementById("encrypt-button").addEventListener("touchend", encryptText);
document.getElementById("btnCopy").addEventListener("touchend", copyText);