//*************************
// author: Leonardo Schmidt
//*************************

// player class
function Player(ctx) {

    this.color = 'green'

    this.clones = []

    var self = this

    this.init = function () {
        this.clones.push( new PlayerClone(ctx,this.color,10) )
    }

    this.update = function(target) {
        for (let i = 0; i < this.clones.length; i++) {
            this.clones[i].draw()
            this.clones[i].move(target)
        }
    }

    this.mitosis = function () {
        let threshold = 20
        let len = self.clones.length
        for (let i = 0; i < len; i++) {
            if(self.clones[i].size.current > threshold)
            {
                self.clones[i].size.current /= 2
                self.clones.push(new PlayerClone(ctx,self.color,self.clones[i].size.current))
            }
        }
    }

    this.updateInfo = function () {
        document.getElementById('size').innerHTML = "<b>Size:</b> " + this.size.current.toFixed(1);
        document.getElementById('vel').innerHTML = "<b>Velocity:</b> " + this.velocity.current.toFixed(1);
    }

}