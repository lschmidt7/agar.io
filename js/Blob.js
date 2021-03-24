//*************************
// author: Leonardo Schmidt
//*************************

// player class
class Blob {

    constructor(color,size) 
    {
        this.color = color
        this.pos = new Vec2(200,200);
        this.dir = new Vec2(0,0);
        this.size = {
            current: size,
            grow_rate: 0.1
        }
        this.velocity = {
            current: 1,
            min: 0.2,
            max: 1,
            rate: 0.01
        }
    }

    // draw the player
    draw()
    {
        Drawer.circ(this.color,this.pos,this.size.current)
    }

    // move player in direction of mouse position
    move(target)
    {
        this.dir = target.sub(this.pos).normalize();
        this.pos = this.pos.add( this.dir.mul(this.velocity.current) );
    }

    // player eats a dot
    // player grows according to the growth rate
    // player lose velocity according to the decay rate
    grow (dotSize)
    {
        this.size.current += this.size.grow_rate * dotSize

        this.velocity.current = 1 - (this.size.current / 300)

        this.velocity.current = Mathf.clamp(this.velocity.current,this.velocity.min,this.velocity.max)
        
    }

    // gets the bounds coordinates of player
    bounds()
    {
        return {
            top_left: this.pos.subScalar(this.size.current),
            bot_right: this.pos.addScalar(this.size.current)
        }
    }

}