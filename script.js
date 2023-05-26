
function seguir(){
 document.addEventListener('mousemove', function(e) {
  var cursor = document.querySelector('#cursor');
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

}




function aplicarCambios() {
            var color = document.getElementsByName('colorElegido')[0];
            document.getElementById('cursor').style.backgroundColor = color.value;
            window.localStorage.setItem('colorCursor', color.value);


            var fontsize = document.getElementsByName('fuente')[0].value;
            document.documentElement.style.fontSize = parseFloat(fontsize) + "rem";
            window.localStorage.setItem('fontsize', parseFloat(fontsize) + "rem"); 

            var selectedElement = document.getElementById('fuente').value;
            window.localStorage.setItem('selectedOption', selectedElement);


}

var colorGuardado = window.localStorage.getItem('colorCursor');
if (colorGuardado) {
 
  document.getElementById('cursor').style.backgroundColor = colorGuardado;
  
  try{
  document.getElementsByName('colorElegido')[0].value = colorGuardado;
  }catch{
    console.log('Esta no es la página de configuración. LOL!');
  }
}else{
   document.getElementById('cursor').style.backgroundColor = '#ff0000'; 
}

var fuente = window.localStorage.getItem('fontsize');

if(fuente){
  document.documentElement.style.fontSize = fuente;
}

var storedValue = window.localStorage.getItem('selectedOption');
if (storedValue) {
  try{
  document.getElementById('fuente').value = storedValue;
  }catch{
    console.log('Esta no es la página de configuración. LOL!');
  }
}
else{
  try{
document.getElementById('fuente').value = "1.0";
    }catch{
      console.log('Esta no es la página de configuración. LOL!');
    }
}



var abrir = document.getElementById('abrir');
var cerrar = document.getElementById('cerrar');
var modal = document.getElementById('modal');


abrir.addEventListener('click', () => {
  modal.showModal();
});

cerrar.addEventListener('click', () => {
  modal.close();
});

var usuario = document.getElementById('usuario');
var sesion =  sessionStorage.getItem('nombre');


if(sesion){
  usuario.innerHTML=sesion;
}
else{
  usuario.classList.add('boton');
  usuario.addEventListener('click', logearse);
}

function logearse() {
  window.location.href = 'login.xml';
}





