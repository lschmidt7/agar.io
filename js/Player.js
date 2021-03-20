//*************************
// author: Leonardo Schmidt
//*************************

// player class
function Player(ctx) {

    this.pos = new Vec2(200,200);

    this.size = {
        current: 10,
        grow_rate: 0.1
    }
    
    this.velocity = {
        current: 1, 
        min: 0.2, 
        max: 1,
        decay_rate: 0.01
    }

    // draw the player
    this.draw = function () {
        ctx.beginPath();
        ctx.fillStyle = "#FF0000";
        ctx.arc(this.pos.x,this.pos.y, this.size.current, 0, 2*Math.PI, false);
        ctx.fill();
    }

    // move player in direction of mouse position
    this.move = function (target) {
        let dir = this.pos.sub(target).mul(-1).normalize();
        this.pos = this.pos.add( dir.mul(this.velocity.current) );
    }

    // player eats a dot
    // player grows according to the growth rate
    // player lose velocity according to the decay rate
    this.grow = function (dotSize) {
        this.size.current += this.size.grow_rate * dotSize;
        
        if( this.velocity.current - this.velocity.decay_rate > this.velocity.min )
        {
            this.velocity.current -= this.velocity.decay_rate
        }
    }

    this.bounds = function () {
        return {
            top_left: this.pos.sub(this.size.current),
            top_right: new Vec2(this.pos.x + this.size.current, this.pos.y - this.size.current),
            bot_left: new Vec2(this.pos.x - this.size.current, this.pos.y + this.size.current),
            bot_right: this.pos.add(this.size.current)
        }
    }

}