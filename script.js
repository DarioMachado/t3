
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
document.getElementById('fuente').value = "1.0";
}



const openModalButton = document.getElementById('open-modal');
const closeModalButton = document.getElementById('close-modal');
const modal = document.getElementById('modal');
console.log(openModalButton);

openModalButton.addEventListener('click', () => {
  modal.showModal();
});

closeModalButton.addEventListener('click', () => {
  modal.close();
});







document.addEventListener('DOMContentLoaded', function() {
  var clickableSections = document.querySelectorAll('.mostrarmas');

  clickableSections.forEach(function(section) {
    var button = section.querySelector('p');
    var additionalText = section.querySelector('.additional-text');

    button.addEventListener('click', function() {
      additionalText.style.display = additionalText.style.display === 'none' ? 'block' : 'none';
    });
  });
});

