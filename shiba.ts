import { Dog } from './dog'

class Shiba extends Dog {
    private tail: string;
    private size: string;
    private furColor: string;

    constructor(name: string, age: number, numOfLegs: number, hasFur: boolean, barks: boolean, tail: string, size: string, furColor: string) {
        super(name, age, numOfLegs, hasFur, barks);
        this.tail = tail;
        this.size = size;
        this.furColor = furColor;
    }

    describe(): string {
        return "My dogs name is " + this.name + ", and is " + this.age + " years old. They have  " + this.numOfLegs + " legs and " + this.hasFur + " fur, and they " + this.barks + ".";
    }
}
