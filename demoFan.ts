enum speed {
    slow = 1,
    medium = 2,
    fast = 3
}

console.log()

class Fan {
    private _speed: speed;
    private _on: boolean;
    private _radius: number;
    private _color: string;

    constructor(speed: speed = 1, on: boolean = false, radius: number = 5, color: string = 'blue') {
        this._speed = speed;
        this._on = on;
        this._radius = radius;
        this._color = color;
    }

    toString() {
        if (this.on === true) {
            return `speed : ${this.speed}, color : ${this.color}, radius: ${this.radius}, fan is on`
        } else {
            return `color : ${this.color}, radius: ${this.radius}, fan is'n on`
        }
    }

    get speed(): speed {
        return this._speed;
    }

    set speed(value: speed) {
        this._speed = value;
    }

    get on(): boolean {
        return this._on;
    }

    set on(value: boolean) {
        this._on = value;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }
}

let fan1 = new Fan()
let fan2 = new Fan(5,true,10,'black')
console.log(fan1.toString())
console.log(fan2.toString())