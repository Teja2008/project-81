canvas= document.getElementById("my_canvas")
ctx= canvas.getContext("2d")
color="aqua"
ctx.beginPath();
ctx.strokeStyle =color
ctx.lineWidth =2
ctx.arc(200,200,40,0,360)
ctx.stroke()
canvas.addEventListener("mousedown", mymousedown)
function mymousedown(e){
    color= document.getElementById("color").value
    mousex=e.clientX-canvas.offsetLeft
    mousey=e.clientY-canvas.offsetTop
    circle(mousex,mousey)
    
}
function circle(mousex,mousey){
    ctx.beginPath();
ctx.strokeStyle =color
ctx.lineWidth =2
ctx.arc(mousex,mousey,20,0,360)
ctx.stroke()
}


