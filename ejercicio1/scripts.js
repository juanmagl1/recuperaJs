//Primero cogemos la lista de botones

let list=document.querySelectorAll('li');
//A continuación cogemos la segunda lista
let list2=document.querySelector('#wishlist')



//Recorremos la lista a ver cual es el boton de añadir a la lista

for (let i=0;i<list.length;i++){
    
    list[i].addEventListener('click',function(){
    //Una vez que tenemos el boton vamos a meterlo en la otra lista
    let item=document.createElement('li')
    item.id="product"
    let bot=document.createElement('button')
    bot.textContent="Eliminar"
    //Creamos el contenido, hay una propiedad javascript que te deja ver lios hijos de un elemento
    //La uso y cojo de ese hijo el contenido
    let cont=document.createTextNode(list[i].firstElementChild.textContent)
    //Metemos el contenido dentro del elemento
    item.appendChild(bot)
    //Creamos un span
    let span=document.createElement('span');
    span.appendChild(cont);
    item.appendChild(span);
    item.appendChild(bot);
    item.classList.add("titulo");
    //Metemos el item dentro de la lista
    
    if(list2.children.length===0){
        list2.appendChild(item)
    }else {
        let bandera=false;
        for (let i=0;i<list2.children.length;i++){
            if (list2.children[i].firstChild.textContent===item.firstChild.textContent){
                bandera=true
            }
        }
        if (!bandera){
            list2.appendChild(item);
        }

        bot.onclick=()=>{
            item.classList.remove("titulo")
            item.remove()

        }
        if (list2.children.length===1){
            list2[0].children.remove()
        }
    }
})
let lista3=document.querySelectorAll('.producto');
for(let i=0;i<=lista3.length;i++){
    lista3[i].addEventListener('click',function(){
        lista3[i].remove()
    })
}



}





