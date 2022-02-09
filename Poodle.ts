import { Dog } from './dog'

class Poodle extends Dog {
    private paws: string;
    private nose: string;
    private teeth: string;

    constructor(name: string, age: number, numOfLegs: number, hasFur: boolean, barks: boolean, paws: string, nose: string, teeth: string) {
        super(name, age, numOfLegs, hasFur, barks);
        this.paws = paws;
        this.nose = nose;
        this.teeth = teeth;

    }
    
    describe(): string {
        return "My dogs name is " + this.name + ", and is " + this.age + " years old. They have  " + this.numOfLegs + " legs and " + this.hasFur + " fur, and they " + this.barks + ".";
    }
}