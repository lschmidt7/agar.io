//*************************
// author: Leonardo Schmidt
//*************************

class States {
    static PLAY = 0;
    static PAUSE = 1;
    static current = States.PLAY;

    static change() {    
        States.current = States.current == States.PLAY ? States.PAUSE : States.PLAY;
    };
}