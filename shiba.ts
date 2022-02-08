class Shiba extends Dog {
        public name: string;
        public age: number;
        public numOfLegs: number;
        public hasFur: boolean;
        public barks: boolean;

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
    
    static sushi = new Shiba("Sushi", 2, 4, true, true);

    
}
