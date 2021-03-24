

class Mathf {

    static clamp(v, min, max)
    {
        return v > max ? max : (v < min ? min : v)
    }

}