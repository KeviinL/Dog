class pug extends Dog {

    name: string;
    age: number; 
    numOfLegs: number;
    hasFur: boolean;
    barks: boolean;

    constructor(name: string, age: number, numOfLegs: number, hasFur: boolean, barks: boolean) {
        super(name, age, numOfLegs, hasFur, barks);
        this.name = name;
        this.age = age;
        this.numOfLegs = numOfLegs;
        this.hasFur = hasFur;
        this.barks = barks;
}    
    describe(): string {return "my dogs name is" + this.name + ", and is " + this.age+ " years old. they have " + this.numOfLegs + "legs and " + this.hasFur + " fur, and they " +this.barks + ".";
}
    static bobby = new pug ("bobby" ,2 ,4, true, true);
}