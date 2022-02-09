export class Dog {
    numOfLegs: number;
    hasFur: boolean;
    barks: boolean;
    name: string;
    age: number;

    constructor(name: string, age: number, numOfLegs: number, hasFur: boolean, barks: boolean) {
        this.name = name;
        this.age = age;
        this.numOfLegs = numOfLegs;
        this.hasFur = hasFur;
        this.barks = barks;
    }

    DogBark(doesDogBark: boolean): string {
        this.barks = doesDogBark;
        if(doesDogBark == true) {
            return "bark bark!";
        }
        return "the dog refused to bark";
    }

    DogName(dogsName: string): string {
        this.name = dogsName;
        return "My dogs name is" + this.name;
    }

    DogAge(dogAge: number): number {
        this.age = dogAge;
        return dogAge;
    }

    DogNumOfLegs(dogLegs: number): number {
        this.numOfLegs = dogLegs; 
        return dogLegs;
    }
    
    DogHasFur(doesDogHaveFur: boolean): string {
        this.hasFur = doesDogHaveFur;
        if(doesDogHaveFur == true) {
            return "My dog has fur";
        }
        return "My dog is bald!";
    }

}