let negro=document.querySelectorAll('strong')

function highlight(){
    for (let i=0;i<negro.length;i++){
        negro[i].classList.add("negrita")
    }
}

function return_normal(){
    for (let i=0;i<negro.length;i++){
        negro[i].classList.remove("negrita")
    }
}