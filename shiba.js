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
var dog_1 = require("./dog");
var Shiba = /** @class */ (function (_super) {
    __extends(Shiba, _super);
    function Shiba(name, age, numOfLegs, hasFur, barks, tail, size, furColor) {
        var _this = _super.call(this, name, age, numOfLegs, hasFur, barks) || this;
        _this.tail = tail;
        _this.size = size;
        _this.furColor = furColor;
        return _this;
    }
    Shiba.prototype.describe = function () {
        return "My dogs name is " + this.name + ", and is " + this.age + " years old. They have  " + this.numOfLegs + " legs and " + this.hasFur + " fur, and they " + this.barks + ".";
    };
    return Shiba;
}(dog_1.Dog));
