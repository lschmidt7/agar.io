function Player(ctx) {

    this.pos = new Vec2(0,0);

    this.size = 150;
    
    this.velocity = 1;

    this.draw = function () {
        ctx.beginPath();
        ctx.fillStyle = "#FF0000";
        ctx.arc(this.pos.x,this.pos.y, this.size, 0, 2*Math.PI, false);
        ctx.fill();
    }

    this.move = function (target) {
        let dir = this.pos.sub(target).mul(-1).normalize();
        this.pos = this.pos.add( dir.mul(this.velocity) );
    }

}