
function EventHandler() {

    this.keyPressEvents = {};

    var self = this;

    this.init = function () {
        document.addEventListener( "keypress", this.onKeyPress, true );
    }

    this.addKeyPress = function (key,f) {
        this.keyPressEvents[key.toString()] = f;
    }

    this.onKeyPress = function (e) {
        if(self.keyPressEvents[e.key] != undefined)
        {
            self.keyPressEvents[e.key].call();
        }
    }

}