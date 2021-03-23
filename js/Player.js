//*************************
// author: Leonardo Schmidt
//*************************

// player class
function Player() {

    this.color = 'green'

    this.blobs = []

    // mouse position on screen
    this.mousePos = new Vec2(0,0);

    var self = this

    this.init = function () {
        this.blobs.push( new Blob(this.color,10) )
    }

    this.update = function() {
        for (let i = 0; i < this.blobs.length; i++) {
            this.blobs[i].draw()
            this.blobs[i].move(this.mousePos)
        }
    }

    this.mitosis = function () {
        let threshold = 20
        let len = self.blobs.length
        for (let i = 0; i < len; i++) {
            if(self.blobs[i].size.current > threshold)
            {
                self.blobs[i].size.current /= 2
                self.blobs.push(new Blob(self.color,self.blobs[i].size.current))
            }
        }
    }

    // set mousePos each frame
    this.setMousePos = function (event)
    {
        this.mousePos.x = event.clientX, 
        this.mousePos.y = event.clientY;
    }

    this.updateInfo = function () {
        document.getElementById('size').innerHTML = "<b>Size:</b> " + this.size.current.toFixed(1);
        document.getElementById('vel').innerHTML = "<b>Velocity:</b> " + this.velocity.current.toFixed(1);
    }

}