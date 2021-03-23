//*************************
// author: Leonardo Schmidt
//*************************

// player class
function PlayerClone(ctx,color,init_size) {

    this.pos = new Vec2(200,200);
    this.dir = new Vec2(0,0);

    this.size = {
        current: init_size,
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
        ctx.fillStyle = color;
        ctx.arc(this.pos.x,this.pos.y, this.size.current, 0, 2 * Math.PI, false);
        ctx.fill();
    }

    // move player in direction of mouse position
    this.move = function (target) {
        this.dir = target.sub(this.pos).normalize();
        this.pos = this.pos.add( this.dir.mul(this.velocity.current) );
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

    // gets the bounds coordinates of player
    this.bounds = function () {
        return {
            top_left: this.pos.subScalar(this.size.current),
            bot_right: this.pos.addScalar(this.size.current)
        }
    }

}