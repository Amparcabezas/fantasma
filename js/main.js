let player=document.querySelector("input[name='player']");
let cards=[];
let elements = ["raton","sillon","fantasma","botella","libro"];
let centralCard = document.querySelector(".centralCard");
let element = document.querySelectorAll(".e");
let play = document.createElement("img");
let eBox= document.querySelector(".eBox");
let points= document.querySelector("#points");//points
let score=0;
let trush=[];
let ranking=document.querySelector(".modal-ranking");
let seconds = 25;
let timeleft=3;
let countdownTimer;
let downloadTimer;
let pointsplayer=document.querySelector("#pointsplayer");//pointsjugador
let playersHistory=[]
let pointList = document.querySelector(".puntuation")
let playerPosition = document.querySelector("#playerPosition");//puestoplayer
let date=new Date();
let dateGame=date.toLocaleDateString()
let namePlayer= document.querySelector("input[name='txtname']")
var error = document.getElementById("error");


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
  document.querySelector("#player_name").innerHTML="Puntuación " + namePlayer.value +" : ";
  
}
//Recupera datos del LocalStorage si los hay.
document.querySelector("body").onload=()=>{
  createCards()
  showCard()

  let playeresAntiguos=localStorage.getItem("games")
  if(playeresAntiguos==undefined){
    //no hay nada
     playersHistory=[]
  }else{
    //hay datos en local storage
    playersHistory=JSON.parse(playeresAntiguos)
  }
  

}


function createCards(){
  for (let i=0;i<elements.length;i++){
    //console.log(elements[i])
    for (let j=1; j<9; j++){
      let card={
          valor:elements[i],
          imagen: elements[i]+j+".svg",
      }
      cards.push(card)
    }
      
  }
  cards = cards.sort(()=>Math.random()-0.5)
}




function showCard(){
  play.src = "./images/baraja/" + cards[0].imagen
  centralCard.appendChild(play)
}


//Match - Coincidencia

eBox.onclick = matchCards;
function matchCards(e){
  console.log(cards)
   if(cards[0].valor == e.target.classList[1]){
    trush.push(cards.shift())
    showCard()
    score++
    addRestPoints(score)
    changeColor2()
    element.forEach(e=>e.classList.remove("logo"))
    
 }
  else {
    changeColor()   
    score--
    addRestPoints(score)
    document.getElementById(e.target.id).classList.add("logo")
  
  }
}

function addRestPoints(point){
  points.innerHTML=point
}

//cambiar color de bg en error y acierto
function changeColor(){
  let bg=document.querySelector(".play_screen")
  if(bg.style.backgroundColor = "rgb(131, 114, 89)"){
    bg.style.backgroundColor = "red";
    error.play();
  }

 
}
function changeColor2(){
  let bg=document.querySelector(".play_screen")
  if(bg.style.backgroundColor = "red"){
    bg.style.backgroundColor = "rgb(131, 114, 89)";
    
  }

}

//CUENTA ATRÁS game

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
    saveGame()
    showRanking()
  } else {
    seconds--;
  }
}

function showRanking(){  
  let proof = playersHistory
    proof.sort((a, b) => (b.puntuation - a.puntuation))
    
    
    const index = proof.findIndex(j =>j.date.getSeconds==date.getSeconds);
      
    
      proof.forEach((r,i) => {
        if(i<10){
          pointList.innerHTML+="<div>"+(i+1)+". "+ r.player+": "+"<span class='destacar'>"+r.puntuation+" puntos "+"("+dateGame+")"+"</span></div>"
        }     
      });
          
    ranking.style.display="flex";
    pointsplayer.innerHTML="Tu puntuación es: " + score;
    playerPosition.innerHTML="Tu puesto en el Ranking es: " + (index+1);
    playersHistory=JSON.parse(localStorage.getItem("games"));
      
}

//guardar player en local storage
function saveGame(){
  game={
      player: namePlayer.value,
      puntuation: score,
      date: new Date()
  }
  date= new Date()
  playersHistory.push(game)
  localStorage.setItem("games",JSON.stringify(playersHistory))
}