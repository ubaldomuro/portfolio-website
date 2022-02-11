let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let x = canvas.width/2;
let y = canvas.height-30;
let dx = 2;
let dy = -2;

let draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
};

let drawBall = () => {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
};

setInterval(draw, 10);

// ctx.beginPath();
//     ctx.rect(20, 40, 50, 50);
//     ctx.fillStyle = "#FF0000";
//     ctx.fill();
// ctx.closePath();

// ctx.beginPath();
//     ctx.arc(240, 160, 20, 0, Math.PI*2, false);
//     ctx.fillStyle = "green";
//     ctx.fill();
// ctx.closePath();

// ctx.beginPath();
//     ctx.rect(160, 10, 100, 40);
//     ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
//     ctx.stroke();
// ctx.closePath();