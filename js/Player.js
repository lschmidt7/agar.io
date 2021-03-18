function Player(ctx) {

    this.pos = {
        x: 0,
        y: 0
    };

    this.size = 150;
    
    this.velocity = 1;

    this.draw = function () {
        ctx.beginPath();
        ctx.fillStyle = "#FF0000";
        ctx.arc(this.pos.x,this.pos.y, this.size, 0, 2*Math.PI, false);
        ctx.fill();
    }

    this.move = function (target) {
        
    }

}