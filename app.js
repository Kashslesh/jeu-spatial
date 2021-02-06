// Initialition des variabels
const spaceship = document.querySelector(".spaceship");
const shot = document.querySelector(".shot");
let parSpaceShip = 20;
// creation d'un logique des coups
function shotGun() {
  if (shot.style.display != "block") {
    shot.style.display = "block";
  }
  setTimeout(function () {
    shot.style.display = "none";
  }, 300);
}
// creation d'un logique du pressage de clavier
document.addEventListener("keydown", function (event) {
  if (event.key == 0 || event.key == 32) {
    shotGun();
  }
  // console.log(event.key);
});

document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;
  let parApresPar = 10
  if (e.keyCode == "37") {
    console.log("pressed left");
    if (parSpaceShip<=0){
      parApresPar = 0
    }else {
      parSpaceShip--;
      spaceship.style.left=`${parApresPar*parSpaceShip}px`;
      shot.style.left=`${parApresPar*parSpaceShip+5}px`;
    }

    
  } else if (e.keyCode == "39") {
    console.log("pressed right");
    if (parSpaceShip>=20){
      parSpaceShip = 20
    }else {
      parSpaceShip++;
      spaceship.style.left=`${parApresPar*parSpaceShip}px`;
      shot.style.left=`${parApresPar*parSpaceShip+5}px`;
    }
  }
}

