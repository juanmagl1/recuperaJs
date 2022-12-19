let boton=document.querySelector('button')
boton.addEventListener('click',function(){
    //Coger el id
 let id=document.querySelector('a').id;
 console.log(id)

 //Coger el type
 let tipo=document.querySelector('p a').type;
 console.log(tipo)

 //Coger el href
 let ref=document.querySelector('p *').href;
 console.log(ref)

 //Coger el target
 let target=document.querySelector('[target="_self"]').target;
 console.log(target)
 //Coger el hreflang
 let hlang=document.querySelector('a').hreflang;
 console.log(hlang)
 //Coger el rel
 let rel=document.querySelector('[id="w3r"]').rel;
 console.log(rel)
})