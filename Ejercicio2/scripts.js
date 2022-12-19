let parr=document.querySelector('p');
let but=document.querySelector('#mas')
let but2=document.querySelector('#menos')
let fuente=document.querySelector('#f1')
let fuente2=document.querySelector('#f2')
let fuente3=document.querySelector('#f3')
let color=document.querySelector('#color');
let num=15;
but.addEventListener('click',function(){
   num=num+4;
   let fuente=parseInt(num);
   parr.style.fontSize=fuente+"px";
})

but2.addEventListener('click',function(){
    num=num-4;
    let fuente=parseInt(num);
    parr.style.fontSize=fuente+"px";
 })

 fuente.addEventListener('click',function(){
   parr.style.fontFamily="Verdana"
 })

 fuente2.addEventListener('click',function(){
   parr.style.fontFamily="Arial"
 })

 fuente3.addEventListener('click',function(){
   parr.style.fontFamily="Times new Roman"
 })

color.addEventListener('click',function(){
   let letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
	let numero = (Math.random()*15).toFixed(0);
   let resultado=letras[numero]

   var coolor = "";
	for(var i=0;i<6;i++){
		coolor = coolor + resultado ;
	}
   parr.style.color="#"+coolor;
})