var elements = document.getElementsByClassName('element');

var editElement = '';

for (var i = 0; i < elements.length; i++) {
  id = '';
  elements[i].addEventListener('dragstart', (e) => {
    id = e.target.id;
  });

  elements[i].addEventListener('dragend', (e) => {
    e.preventDefault();
    var x = e.clientX;
    var y = e.clientY;
    document.getElementsByClassName('container')[0].innerHTML += componentList[id];
    var recent = document.getElementsByClassName('justAdded')[0];
    recent.style.position = 'absolute';
    recent.style.left = x + 'px';
    recent.style.top = y + 'px';
    recent.classList.remove('justAdded');
    for (var i = 0; i < components.length; i++) {
      move(components[i]);
    }
  });
}


var components = document.getElementsByClassName('component')

for (var i = 0; i < components.length; i++) {
  move(components[i]);
}

function move(component) {
  var xinitial = 0;
  var yinitial = 0;

  component.addEventListener('dragstart', (e) => {
    xinitial = e.clientX;
    yinitial = e.clientY;
  });

  component.addEventListener('dragend', (e) => {
    e.preventDefault();
    var x = e.clientX;
    var y = e.clientY;
    e.target.style.position = "absolute";
    e.target.style.left = x + 'px';
    e.target.style.top = y + 'px';
  });
  component.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    editElement = e.target;
  });
}

document.getElementById('TEXT').addEventListener('change', (e) => {
  editElement.style.color = e.target.value;
});

document.getElementById('BG').addEventListener('change', (e) => {
  editElement.style.backgroundColor = e.target.value;
});

document.getElementById('fontsize').addEventListener('change', (e) => {
  editElement.style.fontSize = e.target.value + 'px';
});

document.getElementById('delete').addEventListener('click', (e) => {
  e.preventDefault();
  while(! editElement.classList.contains('component')) {
    editElement = editElement.parentElement;
  }

  editElement.remove();

})

document.getElementById('clearScr').addEventListener('click', (e) => {
  location.reload();
})
document.onload(alert(`Insturions:
  -> Drag components from the toolbox. You can change the positions afterwards too.
  -> Double Click to edit text.
  -> Right Click and the use edit box to edit text properties.`))
