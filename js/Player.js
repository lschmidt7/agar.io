//*************************
// author: Leonardo Schmidt
//*************************

// player class
function Player(ctx) {

    this.pos = new Vec2(200,200);

    this.size = 30;
    
    this.velocity = 1;

    this.draw = function () {
        ctx.beginPath();
        ctx.fillStyle = "#FF0000";
        ctx.arc(this.pos.x,this.pos.y, this.size, 0, 2*Math.PI, false);
        ctx.fill();
    }

    // move player in direction of mousePos
    this.move = function (target) {
        let dir = this.pos.sub(target).mul(-1).normalize();
        this.pos = this.pos.add( dir.mul(this.velocity) );
    }

}