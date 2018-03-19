

var s = 100; //grid spacing
var c = document.getElementById("myCanvas");
var o = {x: 50, y: 50};

var ctx = c.getContext("2d");


function drawGrid(r, c) {
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.setLineDash([2, 3]);
    var guideLinesColor = "#D3D3D3";
    var vertexGuideColor = "#000000";
    var vThick = 5;

    //draw row lines
    ctx.strokeStyle=guideLinesColor;
    for (let i = 0; i < r; i++) {
        ctx.moveTo(o.x, o.y + i*s);
        ctx.lineTo(o.x + (c-1)*s, o.y + i*s);
        ctx.stroke();
    }

    //draw column lines
    ctx.strokeStyle=guideLinesColor;
    for (let i = 0; i < c; i++) {
        ctx.moveTo(o.x + i*s, o.y );
        ctx.lineTo(o.x + i*s, o.y + (r-1)*s);
        ctx.stroke();
    }


    //draw vertex
    ctx.strokeStyle=vertexGuideColor;
    ctx.fillStyle = "#cfe2f3";
    ctx.setLineDash([]);
    for (let i = 0; i < r; i++) {
        ctx.moveTo(o.x, o.y + i*s);
        for (let j = 0; j < c; j++) {
            ctx.beginPath();
            ctx.arc(o.x + j*s - (vThick/2) + 2,o.y + i*s - (vThick/2) + 2, 6,0,2*Math.PI);
            ctx.fill();
            ctx.stroke();
            
           // ctx.fillRect(o.x + j*s - (vThick/2),o.y + i*s - (vThick/2),vThick,vThick);
        }
    }

    

}


function solve(){
    var R = parseInt(document.getElementById('rowAmount').value);
    var C = parseInt(document.getElementById('colAmount').value);
    drawGrid(R,C);    

}