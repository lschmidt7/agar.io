
function Dot(x,y,ctx) {
    
    this.pos = new Vec2(x,y);

    this.size = 5;

    this.draw = function () {
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.arc(this.pos.x,this.pos.y, this.size, 0, 2*Math.PI, false);
        ctx.fill();
    }

}