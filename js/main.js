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

for (let i=0;i<elementos.length;i++){
  //console.log(elementos[i])
  for (let j=1; j<9; j++){
    let carta={
        valor:elementos[i],
        imagen: elementos[i]+j+".svg",
    }
    baraja.push(carta)
  }
    
}
baraja = baraja.sort(()=>Math.random()-0.5)
//console.log(baraja)

let jugada = document.createElement("img")
jugada.src = "./images/baraja/" + baraja[0].imagen
cartaCentral.appendChild(jugada)

//Match - Coincidencia
let e = document.querySelectorAll(".e")
console.log(e)
e[0].onclick=()=>console.log("haz hecho click en el fantasma")
e[1].onclick=()=>console.log("haz hecho click en el libro")
e[2].onclick=()=>console.log("haz hecho click en el botella")
e[3].onclick=()=>console.log("haz hecho click en el raton")
e[4].onclick=()=>console.log("haz hecho click en el sofa")


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
      

    

