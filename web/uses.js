var img = document.getElementById('setupimg');
img.addEventListener("mouseenter", entrar)
img.addEventListener("mouseout", sair)
function entrar(){
  img.style = "max-width: 100%"
}
function sair(){
  img.style = "max-width: 30%"
}