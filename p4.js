$("div").mouseover(function () {
      $(this).effect("shake", { times:3 }, 300);
});
function myMove() {
  var elem = document.getElementById("arito"); 
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}