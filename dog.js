"use strict";
exports.__esModule = true;
exports.Dog = void 0;
var Dog = /** @class */ (function () {
    function Dog(name, age, numOfLegs, hasFur, barks) {
        this.name = name;
        this.age = age;
        this.numOfLegs = numOfLegs;
        this.hasFur = hasFur;
        this.barks = barks;
    }
    Dog.prototype.DogBark = function (doesDogBark) {
        this.barks = doesDogBark;
        if (doesDogBark == true) {
            return "bark bark!";
        }
        return "the dog refused to bark";
    };
    Dog.prototype.DogName = function (dogsName) {
        this.name = dogsName;
        return "My dogs name is" + this.name;
    };
    Dog.prototype.DogAge = function (dogAge) {
        this.age = dogAge;
        return dogAge;
    };
    Dog.prototype.DogNumOfLegs = function (dogLegs) {
        this.numOfLegs = dogLegs;
        return dogLegs;
    };
    Dog.prototype.DogHasFur = function (doesDogHaveFur) {
        this.hasFur = doesDogHaveFur;
        if (doesDogHaveFur == true) {
            return "My dog has fur";
        }
        return "My dog is bald!";
    };
    return Dog;
}());
exports.Dog = Dog;
