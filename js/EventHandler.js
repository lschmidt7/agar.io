//*************************
// author: Leonardo Schmidt
//*************************

class EventHandler {

    constructor()
    {
        this.keyPressEvents = {}
    }

    init () {
        document.addEventListener( "keypress", this.onKeyPress.bind(this), true );
    }

    addKeyPress (key,obj,method_name)
    {
        this.keyPressEvents[key.toString()] = {"obj": obj, "method": method_name}
    }

    onKeyPress (e) {
        if(this.keyPressEvents[e.key] != undefined)
        {
            let r = this.keyPressEvents[e.key]
            r.obj[r.method]()
        }
    }

}