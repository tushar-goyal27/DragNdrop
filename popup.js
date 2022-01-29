// document.getElementById("btn").onclick = hideMenu;
document.onclick = hideMenu;

var components = document.getElementsByClassName('component')
for (var i = 0; i < components.length; i++) {
  components[i].addEventListener('contextmenu', (e) => {
    e.preventDefault();

    if (document.getElementById("contextMenu").style.display == "block")
      hideMenu();
    else {
      var menu = document.getElementById("contextMenu");

      menu.style.display = "block";
      // menu.style.left = e.pageX + "px";
      // menu.style.top = e.pageY + "px";
    }
  })
}

// document.getElementsByClassName("component").oncontextmenu = rightClick;
//
function hideMenu() {
  document.getElementById("contextMenu").style.display = "none";
}
//
function rightClick(e) {
  e.preventDefault();

  if (document.getElementById("contextMenu").style.display == "block")
    hideMenu();
  else {
    var menu = document.getElementById("contextMenu");

    menu.style.display = "block";
    menu.style.left = e.pageX + "px";
    menu.style.top = e.pageY + "px";
  }
}
