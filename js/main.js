//BOTÓN INSTRUCCIONES, ABRE INSTRUCCIONES
function openInstruction(){
    document.querySelector("#instructions").style.display="flex"
}
document.getElementById("openInstructions").onclick=openInstruction
//BOTÓN PLAY, ABRE VENTANA DE 321 Y JUEGO
function openCount(){
    document.querySelector(".count_screen").style.display="flex"
    var timeleft = 0;
      var downloadTimer = setInterval(function(){
        if(timeleft <= 0){
          clearInterval(downloadTimer);
          document.querySelector("#play").style.display="block";
          document.querySelector(".count_screen").style.display="none";
        } else {
          document.getElementById("countdown2").innerHTML = timeleft;
        }
        timeleft -= 1;
      }, 1000);
}
document.getElementById("openPlay").onclick=openCount
//BOTÓN HOME, VUELVE A HOME
function openHome(){
    document.querySelector(".play_screen").style.display="none"
}
document.querySelector(".home").onclick=openHome
//BOTÓN VOLVER, VUELVE A PANTALLA PRINCIPAL DESDE INTRUCCIONES
function return_principlaScreen(){
    document.querySelector("#instructions").style.display="none"
}
document.querySelector("#return").onclick=return_principlaScreen

//Juego
let jugador=document.querySelector("input[name='jugador']")
let baraja=[]
let elementos = ["raton","sillon","fantasma","botella","libro"]
let cartaCentral = document.querySelector(".cartaCentral")

for(let i=1;i<41;i++){
let carta={
    nombre:"c"+i,
    imagen: "c"+i+".svg",
    id: i,
}
    baraja.push(carta)
}
baraja = baraja.sort(()=>Math.random()-0.5)
console.log(baraja)

let jugada = document.createElement("img")
jugada.src = "./images/baraja/" + baraja[0].imagen
cartaCentral.appendChild(jugada)


//guardar jugador en local storage
function guardarPartida(){
    let jugadasDe=JSON.parse(localStorage.getItem(jugador.value))
    if(jugadasDe==null) jugadasDe=[]
    jugadasDe.push(jugada)
    localStorage.setItem(jugador.value,JSON.stringify(jugadasDe))
}
//CUENTA ATRÁS PARTIDA
var seconds = 185;
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
      

    

