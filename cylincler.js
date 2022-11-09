"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Cylincler = void 0;
var circle_1 = require("./circle");
var Cylincler = /** @class */ (function (_super) {
    __extends(Cylincler, _super);
    function Cylincler(radius, color, height) {
        var _this = _super.call(this, radius, color) || this;
        _this.height = height;
        return _this;
    }
    Cylincler.prototype.getVolume = function () {
        return _super.prototype.getArea.call(this) * this.height;
    };
    Cylincler.prototype.tgoString = function () {
        return " hinh tru mau "
            + this.getColor()
            + " co the tich la "
            + this.getVolume();
    };
    return Cylincler;
}(circle_1.Cicle));
exports.Cylincler = Cylincler;
