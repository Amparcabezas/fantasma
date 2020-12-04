
let baraja=[]
let botonIniciar=document.querySelector("#lnkIniciar")
let cartita=document.querySelector(".cartita")

for(let i=0;i<40;i++){
let carta={
    nombre:"c"+i,
    imagen: "img"+i,
    id: i,
    notMatch: "libro"

}
baraja.push(carta)
}
baraja=baraja.sort(()=>Math.random()-0.5)
console.log(baraja)


//muestra primera carta    
botonIniciar.onclick=()=>{

    document.querySelectorAll(".elementos").forEach(el=>{
        el.onclick=match
    })
    
    cartita.textContent=baraja[0].nombre

} 

function match(event){

    console.log(event)
    
}


    

