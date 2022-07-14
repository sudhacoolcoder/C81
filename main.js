Canvas = document.getElementById("myCanvas");
ctx= Canvas.getContext("2d");

ctx. begainPath();
ctx.strokeStyle="red";
ctx.lineWidth =1;
ctx.rect(150,143,430,200);
ctx.strokeStyle();

ctx. begainPath();
ctx.strokeStyle="blue";
ctx.lineWidth =5;
ctx.arc(250,210,40,0,2* Math.PI);
ctx.strokeStyle()

canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color = "red";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth  = 2;
ctx.arc(200, 40, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    console.log(color);

    mouse_x = e.clientX -canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = "+ mouse_x + " ,Y = " + mouse_y);
    circle(mouse_x, mouse_y);
}

function circle(mouse_x, mouse_y)

{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth  = 2;
    ctx.acr(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke();

}

function clearArea()
{
    ctx.clearRect(0,0,canvas.Width,canvas.hight)
}