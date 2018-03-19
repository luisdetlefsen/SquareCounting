

var s = 100; //grid spacing
var c = document.getElementById("myCanvas");
var o = { x: 50, y: 50 };

var ctx = c.getContext("2d");

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function drawSquare(x, y, l) {
    //optional:
    var R = parseInt(document.getElementById('rowAmount').value);
    var C = parseInt(document.getElementById('colAmount').value);
    drawGrid(R, C);  // end optional
    ctx.beginPath();
    ctx.strokeStyle = getRandomColor();
    ctx.fillStyle = getRandomColor();
    ctx.fillRect(x, y, l, l);
    ctx.stroke();
}

function drawDistortedSquare(x1, y1, x2, y2, x3, y3, x4, y4) {
    //optional:
    var R = parseInt(document.getElementById('rowAmount').value);
    var C = parseInt(document.getElementById('colAmount').value);
    drawGrid(R, C);  // end optional
    ctx.fillStyle = getRandomColor();
    ctx.moveTo(x1, y1);
    ctx.beginPath();
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.lineTo(x4, y4);
    ctx.lineTo(x1, y1);
    ctx.fill();
}

function drawSquares(r, c) {
    var color = "#0000FE";

    var result = 0;
    var z = 1;
    for (let i = 0; i < r - 1; i++) {
        for (let j = 0; j < c - 1; j++) {
            t = 1;
            while (t < r - i && t < c - j) {
                console.log((o.x + (j * s)) + "," + (o.y + (i * s)) + "," + (s * t));

                setTimeout(drawSquare, 1000 * z, o.x + (j * s), o.y + (i * s), s * t);

                t++;
                z++;
                result++;
            }


            //now the real challenge
            for (let m = i + 1; m < r - 1; m++) {
                for (let n = 0; n < j; n++) {
                    let p1x = j;
                    let p1y = i;

                    let p2x = n;
                    let p2y = m;

                    var diffx = Math.abs(j - n);
                    var diffy = Math.abs(i - m);

                    let p3x = p2x + diffy;
                    let p3y = p2y + diffx;

                    let p4x = p3x + diffx;
                    let p4y = p3y - diffy;

                    if (p3x <= c - 1 && p3y <= r - 1 && p4x <= c - 1 && p4y <= r - 1) {

                        setTimeout(drawDistortedSquare, 1000 * z, o.x + p1x * s, o.y + p1y * s, o.x + p2x * s, o.y + p2y * s, o.x + p3x * s, o.y + p3y * s, o.x + p4x * s, o.y + p4y * s);

                        z++;
                        result++;
                    }


                }
            }

        }

    }
    setTimeout(function () { alert(result); }, 1000 * z);

}

function drawGrid(r, c) {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.setLineDash([2, 3]);
    var guideLinesColor = "#D3D3D3";
    var vertexGuideColor = "#000000";
    var vThick = 5;

    //draw row lines
    ctx.strokeStyle = guideLinesColor;
    for (let i = 0; i < r; i++) {
        ctx.moveTo(o.x, o.y + i * s);
        ctx.lineTo(o.x + (c - 1) * s, o.y + i * s);
        ctx.stroke();
    }

    //draw column lines
    ctx.strokeStyle = guideLinesColor;
    for (let i = 0; i < c; i++) {
        ctx.moveTo(o.x + i * s, o.y);
        ctx.lineTo(o.x + i * s, o.y + (r - 1) * s);
        ctx.stroke();
    }


    //draw vertex
    ctx.strokeStyle = vertexGuideColor;
    ctx.fillStyle = "#cfe2f3";
    ctx.setLineDash([]);
    for (let i = 0; i < r; i++) {
        ctx.moveTo(o.x, o.y + i * s);
        for (let j = 0; j < c; j++) {
            ctx.beginPath();
            ctx.arc(o.x + j * s - (vThick / 2) + 2, o.y + i * s - (vThick / 2) + 2, 6, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();

            // ctx.fillRect(o.x + j*s - (vThick/2),o.y + i*s - (vThick/2),vThick,vThick);
        }
    }
}


function solve() {
    var R = parseInt(document.getElementById('rowAmount').value);
    var C = parseInt(document.getElementById('colAmount').value);
    drawGrid(R, C);
    drawSquares(R, C);
}