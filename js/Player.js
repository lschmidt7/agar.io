//*************************
// author: Leonardo Schmidt
//*************************

// player class
function Player(ctx) {

    this.pos = new Vec2(200,200);

    this.size = 10;
    
    this.velocity = 1;

    this.velocity_limits = {"min": 0.2, "max":1}

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

    this.grow = function (dotSize) {
        this.size+=0.1*dotSize;
        
        if(this.velocity-0.01 > this.velocity_limits.min){
            this.velocity-=0.01
        }
    }

}