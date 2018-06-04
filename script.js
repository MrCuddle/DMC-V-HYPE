let id = setInterval(frame, 5)
let pos = 0;
let pos2 = 500;
let pos3 = 250;
let flip = false;
function frame(){
  if(pos > 200 || pos < 0)
      flip = !flip;
    
    let change = 4;
    var entity = document.getElementById("entity");
    var entity2 = document.getElementById("entity2");
    var entity3 = document.getElementById("entity3");
    pos += flip ? change : -change;
    pos2 += flip ? -change : change;
    pos3 += flip ? -change : change;
    entity.style.left = pos+'px';
    entity2.style.left = pos2+'px';
    entity3.style.top = pos3+'px';
}
