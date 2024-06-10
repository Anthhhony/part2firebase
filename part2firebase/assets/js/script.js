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
    document.getElementById("idtamaño").addEventListener("click",cambiarTamaño)
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

}
function validarLetra(id, parrafo, valor){
    if(valor.trim().length == 0){
        parrafo.innerText = "tienes que ingresar algo"
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
            parrafo.innerText = "tienes que ingresar solo letras"
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
//const agregar = ()=>{
  //  let vnombre = document.getElementById("inombre").value
    //let vapellido = document.getElementById("inombre").value
    //let vapellido = document.getElementById("inombre").value
    //let vapellido = document.getElementById("inombre").value
    //let vapellido = document.getElementById("inombre").value
