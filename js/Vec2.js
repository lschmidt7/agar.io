//*************************
// author: Leonardo Schmidt
//*************************

// class o Vector in 2D space
class Vec2 {

    constructor(x,y)
    {
        this.x = x;
        this.y = y;
    }

    add (v) 
    {
        let x = this.x + v.x;
        let y = this.y + v.y;
        return new Vec2(x,y);
    }

    sub (v) 
    {
        let x = this.x - v.x;
        let y = this.y - v.y;
        return new Vec2(x,y);
    }

    addScalar (v) 
    {
        let x = this.x + v;
        let y = this.y + v;
        return new Vec2(x,y);
    }

    subScalar (v) 
    {
        let x = this.x - v;
        let y = this.y - v;
        return new Vec2(x,y);
    }

    mul (h) 
    {
        let x = this.x * h;
        let y = this.y * h;
        return new Vec2(x,y);
    }

    div (h) 
    {
        let x = this.x / h;
        let y = this.y / h;
        return new Vec2(x,y);
    }

    mag ()
    {
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }

    normalize () 
    {
        return this.div(this.mag());
    }

    distance (v)
    {
        return Math.sqrt( Math.pow(v.x - this.x , 2) + Math.pow(v.y - this.y , 2) );
    }

}