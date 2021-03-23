//*************************
// author: Leonardo Schmidt
//*************************

// class of Dots
function Dot(x,y,ctx) {
    
    this.pos = new Vec2(x,y);

    this.size = 2;//Math.random() * 2 + 1;

    this.color = ["blue","magenta","yellow","green","orange"][Math.floor(Math.random()*5)];

    this.draw = function () {
        Drawer.circ(this.color,this.pos,this.size)
    }

}