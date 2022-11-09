"use strict";
exports.__esModule = true;
exports.Cicle = void 0;
var Cicle = /** @class */ (function () {
    function Cicle(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    Cicle.prototype.getRadius = function () {
        return this.radius;
    };
    Cicle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Cicle.prototype.getColor = function () {
        return this.color;
    };
    Cicle.prototype.setColor = function (color) {
        this.color = color;
    };
    Cicle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Cicle;
}());
exports.Cicle = Cicle;
