canvas = document.getElementById("myCanvas");
canvas.addEventListener("mousedown", down);
function down(e){
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mousedown";
}
canvas.addEventListener("mouseup", up);
function up(e){
  mouseEvent = "mouseup"
}
canvas.addEventListener("mouseleave", leave)
function leave(){
  mouseEvent = "mouseleave"
}
canvas.addEventListener("mousemove", move);
function move(e){
  mouseEvent = "mousemove"
  newx = e.clientX - canvas.setoffsetLeft;
  newy = e.clientY - canvas.setoffsetTop;
  if(mouseEvent == "mousedown"){
  console.log("Current position of x and y co-ordinates = ");
console.log("X = "+newx, " Y = "+newy);
ctx.begin();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
ctx.arc(newx, newy, radius, 0, 2*Math.PI);
ctx.moveTo(oldx, oldy);
ctx.lineTo(newx, newy);
ctx.stroke()
}
oldx = newx;
oldy = newy;
}
function clear(){
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}