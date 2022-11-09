var speed;
(function (speed) {
    speed[speed["slow"] = 1] = "slow";
    speed[speed["medium"] = 2] = "medium";
    speed[speed["fast"] = 3] = "fast";
})(speed || (speed = {}));
console.log();
var Fan = /** @class */ (function () {
    function Fan(speed, on, radius, color) {
        if (speed === void 0) { speed = 1; }
        if (on === void 0) { on = false; }
        if (radius === void 0) { radius = 5; }
        if (color === void 0) { color = 'blue'; }
        this._speed = speed;
        this._on = on;
        this._radius = radius;
        this._color = color;
    }
    Fan.prototype.toString = function () {
        if (this.on === true) {
            return "speed : ".concat(this.speed, ", color : ").concat(this.color, ", radius: ").concat(this.radius, ", fan is on");
        }
        else {
            return "color : ".concat(this.color, ", radius: ").concat(this.radius, ", fan is'n on");
        }
    };
    Object.defineProperty(Fan.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        set: function (value) {
            this._speed = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fan.prototype, "on", {
        get: function () {
            return this._on;
        },
        set: function (value) {
            this._on = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fan.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            this._radius = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fan.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    return Fan;
}());
var fan1 = new Fan();
var fan2 = new Fan(5, true, 10, 'black');
console.log(fan1.toString());
console.log(fan2.toString());
