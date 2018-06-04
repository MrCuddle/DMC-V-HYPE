let id = setInterval(frame, 1)
let pos = 0;
let pos2 = 500;
let flip = false;
function frame(){
  if(pos > 200 || pos < 0)
      flip = !flip;
    
    let change = 4;
    var entity = document.getElementById("entity");
    var entity2 = document.getElementById("entity2");
    pos += flip ? change : -change;
    pos2 += flip ? -change : change;
    entity.style.left = pos+'px';
    entity2.style.left = pos2+'px';
}
