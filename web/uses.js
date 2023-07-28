var img = document.getElementById('setupimg');
img.addEventListener("click", focar)
img.addEventListener("dblclick", desfocar)
function focar(){
  // img.style = "max-width: 100%"
  if (img.requestFullScreen) {
  img.requestFullScreen()
} else if (img.webkitRequestFullScreen) {
  img.webkitRequestFullScreen()
} else if (img.mozRequestFullScreen) {
  img.mozRequestFullScreen()
} else {
  console.log("O navegador não suporta a tela cheia")
}
}
function desfocar(){
  // img.style = "max-width: 30%"
  if (img.exitFullscreen) {
    img.exitFullscreen()
  } else if (img.webkitExitFullscreen) {
    img.webkitExitFullscreen()
  } else if (img.mozCancelFullScreen) {
    img.mozCancelFullScreen()
  } else if (img.msExitFullscreen) {
    img.msExitFullscreen()
  } else {
    console.log("Não foi possível sair da tela cheia")
  }
}
