let jugador=document.querySelector("input[name='jugador']")
let baraja=[]
let botonIniciar=document.querySelector("#lnkIniciar")
let cartita=document.querySelector(".cartita")

for(let i=0;i<40;i++){
let carta={
    nombre:"c"+i,
    imagen: "img"+i,
    id: i,
    


}
baraja.push(carta)
}


baraja=baraja.sort(()=>Math.random()-0.5)
console.log(baraja)


//muestra primera carta    
botonIniciar.onclick=()=>{

    document.querySelectorAll(".e").forEach(el=>{
        el.onclick=match
    })
    
    cartita.textContent=baraja[0].nombre

} 

function match(event){

    console.log(event)
    
}





function guardarPartida(){
    let jugadasDe=JSON.parse(localStorage.getItem(jugador.value))
    if(jugadasDe==null) jugadasDe=[]
    jugadasDe.push(jugada)
    localStorage.setItem(jugador.value,JSON.stringify(jugadasDe))
}


//CUENTA ATRÁS
var seconds = 180;
      function secondPassed() {
      var minutes = Math.round((seconds - 30)/60);
      
      var remainingSeconds = seconds % 60;
      if (remainingSeconds < 10) {
         remainingSeconds = "0" + remainingSeconds; 
      }
      document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
      
      if (seconds == 0) {
       clearInterval(countdownTimer);
       document.getElementById('countdown').innerHTML = "¡Se acabó tu tiempo!";
      } else {
       seconds--;
      }
      }
      var countdownTimer = setInterval('secondPassed()', 1000);

    

