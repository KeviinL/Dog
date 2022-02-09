import { Dog } from './dog'

class pug extends Dog {
    private small: string;
    private faceSmushed: string;
    private smallPaws: string;
    private furColor: string;


    constructor(name: string, age: number, numOfLegs: number, hasFur: boolean, barks: boolean, small:string, facesmushed: string, smallpaws: string, furcolor: string) {
        super(name, age, numOfLegs, hasFur, barks);
        this.small
        this.faceSmushed
        this.smallPaws
        this.furColor
    }    
    
    describe(): string {return "my dogs name is" + this.name + ", and is " + this.age+ " years old. they have " + this.numOfLegs + "legs and" + this.hasFur + " fur, and they " +this.barks + ".";
    }
}

// we are making the cookie cutter. AKA we are making the pug!