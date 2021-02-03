// Initialition des variabels
const spaceship = document.querySelector(".spaceship");
const shot = document.querySelector(".shot");
let parSpaceShip = 0;
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
}else if ("ArrowRight"){
    let par = parSpaceShip - 20;
    spaceship.style.transform = `translateX(${par}px)`

}else if ("ArrowLeft"){
    let par = parSpaceShip + 20;
    spaceship.style.transform = `translateX(${par}px)`
}
  // console.log(event.key);
});
