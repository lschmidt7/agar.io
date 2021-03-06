//*************************
// author: Leonardo Schmidt
//*************************

// class of Dots
class Dot {

    constructor(x,y,ctx)
    {
        this.pos = new Vec2(x,y)
        this.ctx = ctx
        this.color = ["blue","magenta","yellow","green","orange"][Math.floor(Math.random()*5)]
    }

    draw()
    {
        Drawer.circ(this.color,this.pos,Settings.dot_size)
    }

}