var elements = document.getElementsByClassName('element');
var text=document.getElementById('TEXT');
var bg=document.getElementById('BG');
var fontsize=document.getElementById('fontsize');


for (var i = 0; i < elements.length; i++) {
  id = '';
  elements[i].addEventListener('dragstart', (e) => {
    // e.preventDefault();
    // e.dataTransfer.setData('elementID', e.target.id);
    id = e.target.id;
  });

  elements[i].addEventListener('dragend', (e) => {
    e.preventDefault();
    var x = e.clientX;
    var y = e.clientY;
    // id = e.dataTransfer.getData('elementID');
    console.log(x);
    document.getElementsByClassName('container')[0].insertAdjacentHTML('afterbegin', componentList[id]);
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
    // e.preventDefault();
    xinitial = e.clientX;
    yinitial = e.clientY;
  });

  component.addEventListener('dragend', (e) => {
    e.preventDefault();
    var x = e.clientX;
    var y = e.clientY;
    e.target.style.position = "absolute";
    // console.log("xi" + xinitial);
    // console.log("yi" + yinitial);
    // console.log("x" + x);
    // console.log("y" + y);
    // console.log("xf" + Math.abs(x - xinitial));
    // console.log("yf" + Math.abs(y - yinitial));
    e.target.style.left = x + 'px';
    e.target.style.top = y + 'px';
  });
  components[i].addEventListener('contextmenu', (e) => {
    e.preventDefault();

    if (document.getElementById("contextMenu").style.display == "block") {
      // console.log(e.target.style.color);
      e.target.style.color=text.value;
      // console.log(e.target.style.backgroundColor)
      e.target.style.backgroundColor=bg.value;
      // console.log(e.target.style.backgroundColor)
      e.target.style.fontSize=fontsize.value + 'px';
      // console.log(e.target.style.color);
      document.getElementById("contextMenu").style.display = "none";
      e.target.contentEditable = true;
    } else {
      var menu = document.getElementById("contextMenu");
      menu.style.display = "block";
      e.target.contentEditable = false;
      // menu.style.left = e.pageX + "px";
      // menu.style.top = e.pageY + "px";
    }
    document.getElementById('fontsize').value=15+'px';
    document.getElementById('TEXT').value='#000';
    document.getElementById('BG').value='#FFFFFF' ;
  });
}
