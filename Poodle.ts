class Poodle extends Dog {
    numOfLegs: number;
    hasFur: boolean;
    barks: boolean;
    name: string;
    age: number;

    constructor(name: string, age: number, numOfLegs: number, hasFur: boolean, barks: boolean) {
        super(name, age, numOfLegs, hasFur, barks);
        this.name = name;
        this.age = age;
        this.numOfLegs = numOfLegs;
        this.hasFur = hasFur;
        this.barks = barks;
    }
        describe(): string {
            return "My dogs name is " + this.name + ", and is " + this.age + " years old. They have  " + this.numOfLegs + " legs and " + this.hasFur + " fur, and they " + this.barks + ".";
    }
        static Rover: Poodle = new Poodle( "Rover", 2, 4, true, true); 
}