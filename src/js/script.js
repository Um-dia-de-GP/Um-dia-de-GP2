let tarefas = [];

//valida o preenchimento da tarefa caso nao tenha nada
function validaCampo() {
  let valida = false;
  if (document.getElementById('task').value == '') valida = true;
  return valida;
}

//funcao que adiciona a tarefa
function adcionaTarefa() {
  let linhas = document.getElementById('task');
  if (validaCampo()) {
    alert('Preencha a tarefa!');
  } else {
    tarefas.push(linhas.value);
    console.log(tarefas);
    linhas.value = '';
    listarTarefas();
  }
  document.getElementById('task').focus();
}

//funcao que mostra a lista de tarefas

function listarTarefas() {
  let valor = '';
  for (let i = 0; i < tarefas.length; i++) {
    valor += tarefas[i] + '<br/>';
  }
  document.getElementById('lista').innerHTML = valor;
}

function removeTarefa() {
  tarefas.pop();
  listarTarefas();
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n); 
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}