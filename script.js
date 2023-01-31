const textArea = document.querySelector(".txt-area");
const txtDesencripta = document.querySelector(".txt-desencripta");
let matrizCodigo = [["e","entre"],["i", "imes"], ["a","ai"], ["o", "ober"], ["u", "ufat"]];

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function btnEncriptar(){

    if(textArea.value == ""){
        alert("tu campo est a vacio");
        txtDesencripta.value ="";
        txtDesencripta.style.backgroundImage = "url(imagenes/Muñeco.png)";


    }
    else {
        const txEncriptado = encriptar(textArea.value);
        txtDesencripta.value = txEncriptado;
        textArea.value = "";//para que la area de texto se limpie 
        txtDesencripta.style.backgroundImage = "none";// se usa para quitar la imagen del cuadro cuando aparece texto

    }
    
   
}

function encriptar (stringEncriptado){
       stringEncriptado = stringEncriptado.toLowerCase();//devuelve el valor en minúsculas de la cadena que realiza la llamada.

    for(let i =0; i< matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
            

        }

    }
    return stringEncriptado;
}

function btnDesencriptar(){
    if(textArea.value == ""){
        alert("tu campo esta vacio");
        txtDesencripta.value ="";
        txtDesencripta.style.backgroundImage = "url(imagenes/Muñeco.png)";


    }
    else {
    const txEncriptado = desencriptar(textArea.value);
    txtDesencripta.value = txEncriptado;
    textArea.value = "";
    txtDesencripta.style.backgroundImage = "none";
     }

}



function desencriptar(stringDesencriptar){
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for(let i = 0; i<matrizCodigo.length; i++){
        if(stringDesencriptar.includes(matrizCodigo[i][1])){
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptar;
}

function btnCopiar(){
    if(txtDesencripta.value == ""){
        alert("tu campo esta vacio");
        txtDesencripta.value ="";
        txtDesencripta.style.backgroundImage = "url(imagenes/Muñeco.png)";


    }
    else {
        const txtCopiado = txtDesencripta;
        txtCopiado.select();
        document.execCommand("Copy");
       
     }

}









                 


