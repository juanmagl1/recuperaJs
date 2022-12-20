const lista=document.querySelector('ul');
const wish=document.querySelector('#wishlist');
lista.addEventListener('click',function(e){
    let encontrado = false;
    //Convierto la html collection en un array para poder usar sus propiedades
    const listaHijos = Array.from(wish.children)
//Reorro la lista buscando que el texto del primer hijo que es el span sea igual que el atributo
//Data-name del li que provoca el evento
    for(let i=0; i < listaHijos.length; i++) {
        if(listaHijos[i].firstChild.textContent === e.target.dataset.name) {
            //Si encuentra alguno que ponga la bandera en true
            encontrado = true;
        }
    }
//Si la bandera es falsa me añade el elemento y le añado la clase
    if(!encontrado) {
        let span=document.createElement('span');
        let lis=document.createElement('li');
        let butt=document.createElement('button');
        butt.textContent="Eliminar";
        butt.setAttribute("data-name", e.target.dataset.name)
        span.textContent=e.target.dataset.name
        span.setAttribute("class","titulo");
        lis.appendChild(span)
        lis.appendChild(butt)
        wish.appendChild(lis);
    }   
})
//Borrar
wish.addEventListener('click',function(e){
    //Para borrar recorro la lista comparando el contenido del primer hijo con el data-name del
    //elemento que ha provocado el evento
    for(let i=0; i < wish.children.length; i++) {
        if(wish.children[i].firstChild.textContent === e.target.dataset.name) {
            //Si lo encuentra que borre el elemento y le quite la clase
            wish.children[i].classList.remove("titulo")
            wish.children[i].remove();
        }
    }
})