//BOTÓN PLAY, ABRE VENTANA DE JUEGO
//function openGame(){
    //document.querySelector("#play").style.display="block"
   
//}
//document.getElementById("openPlay").onclick=openGame


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



//BOTÓN INSTRUCCIONES, ABRE INSTRUCCIONES
function openInstruction(){
    document.querySelector("#instructions").style.display="flex"
}

document.getElementById("openInstructions").onclick=openInstruction

//BOTÓN VOLVER, VUELVE A PANTALLA PRINCIPAL DESDE INTRUCCIONES
function return_principlaScreen(){
    document.querySelector("#instructions").style.display="none"
}
document.querySelector("#return").onclick=return_principlaScreen

/*
//BOTÓN MENU, VUELVE A PANTALLA PRINCIPAL DESDE JUEGO
function Menu_principlaScreen(){
    document.querySelector("play_screen").style.display="none"
}
document.querySelector("#return2").onclick=Menu_principlaScreen
*/



let jugador=document.querySelector("input[name='jugador']")
let baraja=[]
let botonIniciar=document.querySelector("#lnkIniciar")
let cartaCentral=document.querySelector(".cartaCentral")

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
    
    cartaCentral.textContent=baraja[0].nombre

} 

function match(event){

    console.log(event)
    
}



//guardar jugador en local storage

function guardarPartida(){
    let jugadasDe=JSON.parse(localStorage.getItem(jugador.value))
    if(jugadasDe==null) jugadasDe=[]
    jugadasDe.push(jugada)
    localStorage.setItem(jugador.value,JSON.stringify(jugadasDe))
}


//CUENTA ATRÁS
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


      //CUENTA ATRÁS 321
      

    

