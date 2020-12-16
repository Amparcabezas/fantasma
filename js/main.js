let jugador=document.querySelector("input[name='jugador']");
let baraja=[];
let elementos = ["raton","sillon","fantasma","botella","libro"];
let cartaCentral = document.querySelector(".cartaCentral");
let element = document.querySelectorAll(".e");
let fantasma = document.querySelector(".fantasma");
let jugada = document.createElement("img");
let eBox= document.querySelector(".eBox");
let puntos= document.querySelector("#points");
let marcador=0;
let monton=[];
let ranking=document.querySelector(".modal-ranking");
let seconds = 7;
let timeleft=3;
let countdownTimer;
let downloadTimer;
let puntosJugador=document.querySelector("#puntosJugador");
let objSession=[]
let listaPuntajes = document.querySelector(".puntuacion")
let puestoJugador = document.querySelector("#puestoJugador");
let fecha=new Date();
let fechaJugada=fecha.toLocaleDateString()
let nombreJugador= document.querySelector("input[name='txtname']")



//BOTÓN INSTRUCCIONES, ABRE INSTRUCCIONES
function openInstruction(){
    document.querySelector("#instructions").style.display="block"
}
document.getElementById("openInstructions").onclick=openInstruction

//BOTÓN PLAY, ABRE VENTANA DE 321 Y JUEGO
function openCount(){
    document.querySelector(".count_screen").style.display="flex"
    console.log(timeleft)
      downloadTimer = setInterval(function(){
        if(timeleft <= 0){
          clearInterval(downloadTimer);
          document.querySelector("#play").style.display="block";
          document.querySelector(".count_screen").style.display="none";
          document.getElementById("countdown2").innerHTML = "";
        } else {
          document.getElementById("countdown2").innerHTML = timeleft;
        }
        timeleft -= 1;
      }, 1000);
}
document.getElementById("openPlay").onclick=openCount


//BOTÓN HOME, VUELVE A HOME
function resetGameAndGoHome(){
    document.querySelector(".play_screen").style.display="none";
    clearInterval(countdownTimer)
    clearInterval(downloadTimer)
    seconds=20;
    timeleft=3;
    
       
}
document.querySelector(".home").onclick=resetGameAndGoHome


//BOTÓN VOLVER, VUELVE A PANTALLA PRINCIPAL DESDE INTRUCCIONES
function return_principlaScreen(){
    document.querySelector("#instructions").style.display="none"
}
document.querySelector("#return").onclick=return_principlaScreen




document.querySelector(".play").onclick=()=>{
  
  countdownTimer=setInterval('secondPassed()', 1000);
  document.querySelector("#player_name").innerHTML="Puntuación " + nombreJugador.value +" : ";
  
}
//Recupera datos del LocalStorage si los hay.
document.querySelector("body").onload=()=>{
  createCards()
  mostrarCarta()

  let jugadoresAntiguos=localStorage.getItem("partidas")
  if(jugadoresAntiguos==undefined){
    //no hay nada
     objSession=[]
  }else{
    //hay datos en local storage
    objSession=JSON.parse(jugadoresAntiguos)
  }
  

}


function createCards(){
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
}




function mostrarCarta(){
  jugada.src = "./images/baraja/" + baraja[0].imagen
  cartaCentral.appendChild(jugada)
}


//Match - Coincidencia

eBox.onclick = matchCards;
function matchCards(e){
  console.log(baraja)
   if(baraja[0].valor == e.target.classList[1]){
    monton.push(baraja.shift())
    mostrarCarta()
    marcador++
    sumaRestaPuntos(marcador)
    cambiarColor2()
    element.forEach(e=>e.classList.remove("logo"))
    
 }
  else {
    cambiarColor()   
    marcador--
    sumaRestaPuntos(marcador)
    document.getElementById(e.target.id).classList.add("logo")
  
  }
}

function sumaRestaPuntos(punto){
  puntos.innerHTML=punto
}

//cambiar color de fondo en error y acierto
function cambiarColor(){
  let fondo=document.querySelector(".play_screen")
  if(fondo.style.backgroundColor = "rgb(131, 114, 89)"){
    fondo.style.backgroundColor = "red";
  }

 
}
function cambiarColor2(){
  let fondo=document.querySelector(".play_screen")
  if(fondo.style.backgroundColor = "red"){
    fondo.style.backgroundColor = "rgb(131, 114, 89)";
  }

}

//CUENTA ATRÁS PARTIDA

function secondPassed() {
  let minutes = Math.round((seconds - 30)/60);
  let remainingSeconds = seconds % 60;
  if (remainingSeconds < 10) {
     remainingSeconds = "0" + remainingSeconds; 
  }
  document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
  if (seconds == 0) {
    clearInterval(countdownTimer);
    document.getElementById('countdown').innerHTML = "TimeOut";
    guardarPartida()
    apareceRanking()
  } else {
    seconds--;
  }
}

function apareceRanking(){  
  let prueba = objSession
    prueba.sort((a, b) => (b.puntuacion - a.puntuacion))
    
    
    const index = prueba.findIndex(j =>j.fecha.getSeconds==fecha.getSeconds);
      
    
      prueba.forEach((r,i) => {
        if(i<10){
          listaPuntajes.innerHTML+="<div>"+(i+1)+". "+ r.jugador+": "+"<span class='destacar'>"+r.puntuacion+" puntos "+"("+fechaJugada+")"+"</span></div>"
        }     
      });
          
    ranking.style.display="flex";
    puntosJugador.innerHTML="Tu puntuación es: " + marcador;
    puestoJugador.innerHTML="Tu puesto en el Ranking es: " + (index+1);
    objSession=JSON.parse(localStorage.getItem("partidas"));
      
}

//guardar jugador en local storage
function guardarPartida(){
  partida={
      jugador: nombreJugador.value,
      puntuacion: marcador,
      fecha: new Date()
  }
  fecha= new Date()
  objSession.push(partida)
  localStorage.setItem("partidas",JSON.stringify(objSession))
}