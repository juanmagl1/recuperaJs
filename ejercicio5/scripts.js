let dniEl=document.querySelector('#dni')
let nombreEl=document.querySelector('#nombre')
let form=document.querySelector('form')
let radioEl=document.querySelectorAll('[type="radio"]')
let fechaNacEl=document.querySelector('#fecha')
let emailEl=document.querySelector('#email')
let pg=document.querySelector('#pag')
let contrasenna=document.querySelector('#pass')
//funciones de validacion
const isDNIValid=(dni)=>{
    let dniValid = new RegExp("^[0-9]{2}.[0-9]{3}.[0-9]{3}-[a-zA-Z]$");
    return dniValid.test(dni);
}

const isEmail=(email)=>{
    const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
//Función para que cuando le pulses si se muestre el imput de numero de hijos
radioEl[0].addEventListener('click',function(e){
    document.querySelector('#numHijos').removeAttribute('hidden')

})

radioEl[1].addEventListener('click',function(){
    document.querySelector('#numHijos').setAttribute('hidden',"true") 

})

const mayor18 = (date)=>{
    const today=new Date();
    const fecha=new Date(date);
    let edad=today.getFullYear()-fecha.getFullYear();
    const month=today.getMonth()-fecha.getMonth()
    if (month<0){
        edad--;
    }
    if (edad>=18){
        return true
    }else {
        return false
    }
}

const nombreApellido=(nombreEl)=>{
    let nuevaCadena=new String(nombreEl)
    let nombreSinEspacios=nuevaCadena.trim();
    let cont=0;
    for (let i=0;i<nombreSinEspacios.length;i++){
        if (nombreSinEspacios[i]===' '){
            cont++;
        }
    }
    if (cont>=1&&cont<=3){
        return true
    }else{
        return false
    }

}


const isRequired=value=> value===''?false:true;

const isBetween = (length, min, max) => length < min || length > max ? false : true;

//Funciones de validacion de los campos

const checkDNI=()=>{
    let valid=false;
    const dni=dniEl.value.trim()
    if (!isRequired(dni)){
        showError(dniEl,'El campo dni no puede estar en blanco')
    }else if (!isDNIValid(dni)){
        showError(dniEl,`Dni incorrecto`)
    }else {
        showSucess(dniEl)
        valid=true
    }
    return valid;
}

const checkNombre=()=>{
    let valid=false
    let nombre=nombreEl.value.trim()
    if (!isRequired(nombre)){
        showError(nombreEl,'El campo nombre no puede estar en blanco')
    }else if(!nombreApellido(nombre)){
        showError(nombreEl,'El nombre introducido no es correcto')
    }else {
        showSucess(nombreEl)
        valid=true
    }
    return valid
}

const fechaNacValid=()=>{
    let valid=false
    let fnac=fechaNacEl.value.trim()
    if (!isRequired(fnac)){
        showError(fechaNacEl,'El campo nombre no puede estar en blanco')
    }else if (!mayor18(fnac)){
        showError(fechaNacEl,'No tienes mas de 18 ')
    }else {
        showSucess(fechaNacEl)
        valid=true
    }
    return valid
}

const emailValid=()=>{
    let valid=false;
    let email=emailEl.value.trim();
    if (!isRequired(email)){
        showError(emailEl,'El campo no puede estar en blanco')
    }else if (!isEmail(email)){
        showError(emailEl,'El email no tiene un formato correcto')
    }else {
        showSucess(emailEl)
        valid=true
    }
    return valid;
}

const isPg=()=>{
    let valid=false
    let pgN=pg.value.trim();
    if (!isRequired(pgN)){
        showError(pg,'El campo no puede estar en blanco')
    }else {
        showSucess(pg)
        valid=true
    }
    return valid
}

const checkPass=()=>{
    let valid=false
    const min=6,max=8
    let pass=contrasenna.value.trim()
    if (!isRequired(pass)){
        showError(contrasenna,'El campo no puede estar vacio')
    }else if (!isBetween(pass.length,min,max)){
        showError(contrasenna,'La contrasenna tiene que estar entre esos campos')
    }else {
        showSucess(contrasenna)
        valid=true
    }
    return valid
}

//Funciones de si es error o es valido

const showError=(input,message)=>{
    const formField=input.parentElement
    const error=formField.querySelector('small')
    error.textContent=message
}

const showSucess=(input)=>{
    const formField=input.parentElement
    const error=formField.querySelector('small')
    error.textContent=''
}
form.addEventListener('submit',function(e){
    e.preventDefault()
    let dniValido=checkDNI(),
    isNombreValid=checkNombre(),
    isFechaNacValid=fechaNacValid(),
    isEmailValid=emailValid(),
    isPgValid=isPg(),
    isPass=checkPass()

    let formValid=dniValido&&
    isNombreValid&&
    isFechaNacValid&&
    isEmailValid&&
    isPgValid&&
    isPass

    if (formValid){

    }
})