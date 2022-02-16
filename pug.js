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
var pug = /** @class */ (function (_super) {
    __extends(pug, _super);
    function pug(name, age, numOfLegs, hasFur, barks, small, facesmushed, smallpaws, furcolor) {
        var _this = _super.call(this, name, age, numOfLegs, hasFur, barks) || this;
        _this.small;
        _this.faceSmushed;
        _this.smallPaws;
        _this.furColor;
        return _this;
    }
    pug.prototype.describe = function () {
        return "my dogs name is" + this.name + ", and is " + this.age + " years old. they have " + this.numOfLegs + "legs and" + this.hasFur + " fur, and they " + this.barks + ".";
    };
    return pug;
}(dog_1.Dog));
// we are making the cookie cutter. AKA we are making the pug!
