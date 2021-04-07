//*************************
// author: Leonardo Schmidt
//*************************

// player class
class Blob {

    constructor(color,size,pos) 
    {
        this.color = color
        this.pos = pos
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
    move(target,blobs,index)
    {
        this.dir = target.sub(this.pos).normalize();
        let newPos = this.pos.add( this.dir.mul(this.velocity.current) );
        if(!this.conflict(newPos,blobs,index))
        {
            this.pos = newPos
        }
    }

    conflict(npos,blobs,index)
    {
        for (let i = 0; i < blobs.length; i++) {
            if(i!=index)
            {
                let total_radius = blobs[index].size.current + blobs[i].size.current
                let dist = npos.distance(blobs[i].pos)
                if(dist < total_radius)
                {
                    return true
                }
            }
        }
        return false
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