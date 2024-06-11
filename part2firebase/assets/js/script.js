//import { agregarUsuario } from "./promesas.js";

window.addEventListener("click", ()=>{
    document.getElementById("luna").addEventListener("click",a =>{
        let inputs = document.getElementsByClassName("classinput")
        let c = a.target.checked;
        if (c==true){
            document.getElementById("idluna").innerHTML = '<i class="fa-regular fa-sun"></i>'
            document.body.classList.remove("colorclaro")
            document.body.classList.add("colordark")
            for (let index = 0; index < inputs.length; index++) {
                const element = inputs[index];
                element.style.backgroundColor = "rgb(100, 100, 100)"
                element.style.transition = "1s"
                
            }
        }
        else{
            document.getElementById("idluna").innerHTML = '<i class="fa-regular fa-moon"></i>'
            document.body.classList.remove("colordark")
            document.body.classList.add("colorclaro")
            for (let index = 0; index < inputs.length; index++) {
                const element = inputs[index];
                element.style.backgroundColor = "white"
                element.style.transition = "1s"
            }
        }
        })
    });
    document.getElementById("tamaño").addEventListener("click", a =>{
        let inputs = document.getElementsByClassName("classinput");
        let labels = document.getElementsByClassName("classlabel");
        let cambio = a.target.checked;
        console.log(cambio)
        if (cambio==true){
            document.getElementById("idtamaño").innerHTML = '<i class="fa-solid fa-down-left-and-up-right-to-center"></i>'
            document.body.classList.remove("pequeletra")
            document.body.classList.add("cambioletra")
            for (let index = 0; index < inputs.length; index++) {
                const element = inputs[index];
                element.classList.remove("pequeletra")
                element.classList.add("cambioletra")
            }
            for (let index = 0; index < labels.length; index++) {
                const element = labels[index];
                element.classList.remove("pequeletra")
                element.classList.add("cambioletra")
            }
        }
        else{
            document.getElementById("idtamaño").innerHTML = '<i class="fa-solid fa-up-right-and-down-left-from-center"></i>'
            document.body.classList.remove("cambioletra")
            document.body.classList.add("pequeletra")
            for (let index = 0; index < inputs.length; index++) {
                const element = inputs[index];
                element.classList.remove("cambioletra")
                element.classList.add("pequeletra")
            }
            for (let index = 0; index < labels.length; index++) {
                const element = labels[index];
                element.classList.remove("cambioletra")
                element.classList.add("pequeletra")
            }
        }
    })
    document.getElementById("btnRegistrar").addEventListener("click", validacion)
    //document.getElementById("btnRegistrar").addEventListener("click",agregar)


function cambiarTamaño(){
    let inputs = document.getElementsByClassName("classinput");
    let labels = document.getElementsByClassName("classlabel");
    for (let index = 0; index < inputs.length; index++) {
        const element = inputs[index];
        element.style.transition = "1s";
        element.style.fontSize = "50px";
    }
    for (let index = 0; index < labels.length; index++) {
        const element = labels[index];
        element.style.transition = "1s";
        element.style.fontSize = "50px";
        
    }
    document.body.classList.add("cambioletra");
}

function validacion(){
    validarnombre("nombre")
    validarapellido("apellido")
    validaredad("edad")
    validarradio("estadoCivil","estadoCivil1")
}

function validarlongitud(id, parrafo, valor, l_num){
    if(valor.trim().length <= l_num){
        id.style.border = "green solid 3px"
    }
    else{
        id.style.border = "red solid 3px";
        parrafo.innerText = "pusiste demaciados numeros, porfavor intente corregirlo";
        parrafo.style.display = "block"
        parrafo.style.transition = "0.7s"
    }
}

function validarvalor(id,parrafo,valor){
    
}

function validarLetra(id, parrafo, valor){
    if(valor.trim().length == 0){
        parrafo.innerText = "Tienes que ingresar algo"
        id.style.border = "red solid 3px"
        parrafo.style.display = "block"
    }
    else{
        if(isNaN(valor)==true){
            id.style.border = "green solid 3px"
            console.log("todo bien")
            parrafo.style.display = "none"
            return true
        }
        else{
            parrafo.innerText = "Tienes que ingresar solo letras"
            id.style.border = "red solid 3px"
            parrafo.style.display = "block"
        }
    }
}
function validarnombre(campo){
    let idnombre = document.getElementById("i"+campo)
    let nombreP = document.getElementById("c"+campo)
    let vnombre = idnombre.value
    validarLetra(idnombre, nombreP, vnombre)
}

function validarapellido(campo){
    let idapellido = document.getElementById("i"+campo)
    let apellidoP = document.getElementById("c"+campo)
    let vapellido = idapellido.value
    validarLetra(idapellido, apellidoP, vapellido)
}
function validaredad(campo){
    let idedad = document.getElementById("i"+campo);
    let edadP = document.getElementById("c"+campo);
    let vedad = idedad.value;
    validarlongitud(idedad, edadP, vedad, 3)
}
function validarradio(campo1,campo2){
    let idsoltero = document.getElementById("i"+campo1);
    let vsoltero = idsoltero.checked;
    let idcasado = document.getElementById("i"+campo2);
    let vcasado = idcasado.checked;
    let pradio = document.getElementById("cradio");
    let valor1 = ""
    let valor2 = ""
    if(vsoltero==false && vcasado==false){
        pradio.style.display = "block"
        pradio.innerText = "Tienes que ingresar una opcion"
    }
    else if(vsoltero == true){
        valor1 = "Soltero"
        console.log(valor1)
        console.log(valor2)
        return true
    }
    else{
        valor2 = "Casado"
        console.log(valor1)
        console.log(valor2)
        return true
    }

}
//const agregar = ()=>{
  //  let vnombre = document.getElementById("inombre").value
    //let vapellido = document.getElementById("inombre").value
    //let vapellido = document.getElementById("inombre").value
    //let vapellido = document.getElementById("inombre").value
    //let vapellido = document.getElementById("inombre").value
