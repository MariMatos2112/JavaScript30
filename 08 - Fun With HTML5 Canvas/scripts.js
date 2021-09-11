const canvas = document.getElementById('canvas');
let coord = {x:0, y:0}
let paint = false;
const ctx = canvas.getContext('2d');
let lineWidth = 6;
let goodWidth = true;
let hue = 1;
let goodHue = true;


window.addEventListener('load', () => {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
 
    document.addEventListener('mousedown', startPaiting);
    document.addEventListener('mouseup', stopPaiting);
    document.addEventListener('mousemove', draw);
})
 
const getPosition = event => {
    coord.x = event.clientX;
    coord.y = event.clientY;
}
 
const startPaiting = event => {
    paint = true;
    getPosition(event);
}
 
const stopPaiting = () => {
    paint = false;
}
 
const draw = (event) => {
    if (!paint) return;
    
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.moveTo(coord.x, coord.y);
    getPosition(event);
    ctx.lineTo(coord.x, coord.y);
    ctx.stroke();

    if (lineWidth > 50 || lineWidth < 6) goodWidth = !goodWidth;
    if (hue > 360 || hue < 1) goodHue = !goodHue;

    if (goodWidth) lineWidth += .4
    else lineWidth -= .4;

    if(goodHue) hue++
    else hue--;
}
