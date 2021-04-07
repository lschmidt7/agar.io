//*************************
// author: Leonardo Schmidt
//*************************

// Thorn class
class Virus {

    constructor(x,y,ctx)
    {
        this.pos = new Vec2(x,y)
        this.ctx = ctx
        this.color = "green"
    }

    draw()
    {
        var img = new Image()
        img.src = 'C:/Users/Leonardo/dev/agar.io/img/virus.png'
        Drawer.img(this.pos.x,this.pos.y,img)
    }

}