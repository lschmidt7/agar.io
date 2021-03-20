//*************************
// author: Leonardo Schmidt
//*************************

// class of Dots
function Dot(x,y,ctx) {
    
    this.pos = new Vec2(x,y);

    this.size = Math.random() * 2 + 1;

    this.color = ["blue","magenta","yellow","green","orange"][Math.floor(Math.random()*5)];

    this.draw = function () {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.pos.x,this.pos.y, this.size, 0, 2*Math.PI, false);
        ctx.fill();
    }

}