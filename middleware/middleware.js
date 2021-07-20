class HandlerChain {
    constructor() {
        this.result = 0
    }
    setNextObj(nextObjInChain) { }
}

class Cuadrat extends HandlerChain {
    constructor() {
        super()
        this.nextObjInChain = new HandlerChain()
    }

    setNextObj(nextObj) {
        this.nextObjInChain = nextObj
    }

    processMaths(req) {
        this.nextObjInChain.processMaths(Math.pow(req, 2))
    }
}

class Cub extends HandlerChain {
    constructor() {
        super()
        this.nextObjInChain = new HandlerChain()
    }

    setNextObj(nextObj) {
        this.nextObjInChain = nextObj
    }

    processMaths(req) {
        this.nextObjInChain.processMaths(Math.pow(req, 3))
    }
}

class Dividir extends HandlerChain {
    constructor() {
        super()
        this.result = 0
        this.nextObjInChain = new HandlerChain()
    }

    setNextObj(nextObj) {
        this.nextObjInChain = nextObj
    }

    processMaths(req) {
        this.result = req / 2
    }
}


module.exports = function middleware(num) {
    var p1 = new Cuadrat();
    var p2 = new Cub();
    var p3 = new Dividir();
    p1.setNextObj(p2);
    p2.setNextObj(p3);
    p1.processMaths(num)
    return p3.result
}
