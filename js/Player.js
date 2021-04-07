//*************************
// author: Leonardo Schmidt
//*************************

// player class
class Player {

    constructor(){

        this.blobs = []

        this.mousePos = new Vec2(0,0);
    }

    init()
    {
        this.blobs.push( new Blob(Settings.player_color,10,new Vec2(200,200)) )
    }

    update() 
    {
        for (let i = 0; i < this.blobs.length; i++) {
            this.blobs[i].draw()
            this.blobs[i].move(this.mousePos)
        }
    }

    mitosis()
    {
        let len = this.blobs.length
        for (let i = 0; i < len; i++) {
            if(this.blobs[i].size.current > Settings.mitosis_threshold)
            {
                this.blobs[i].size.current /= 2
                this.blobs.push(new Blob(this.color,this.blobs[i].size.current,new Vec2(100,100)))
            }
        }
    }

    // set mousePos each frame
    setMousePos(event)
    {
        this.mousePos.x = event.clientX, 
        this.mousePos.y = event.clientY;
    }

    updateInfo()
    {
        document.getElementById('size').innerHTML = "<b>Size:</b> " + this.size.current.toFixed(1);
        document.getElementById('vel').innerHTML = "<b>Velocity:</b> " + this.velocity.current.toFixed(1);
    }

}