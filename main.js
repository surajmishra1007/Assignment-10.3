class Dog{                          // declaring class Dog
    constructor(name){              //Constructor delaration
        this.name = name;   
    }

    speak(){                        //Speak method
        console.log("woof");        //Output
    }
}

class Labrador extends Dog{                     // declaring class Labrador and inheriting Dog class
    constructor(name,color,breedWeight){        // declaring constructor for new class
        super(name);                            // calling super class constructor
        this.color = color;
        this.breedWeight = breedWeight;
    }

    speak(){                                        //overiding Speak method of super class 
        console.log('Labrador says WOOF');          // Output
    }
}

let dog = new Dog("Sheru");                         //creating new object of Dog clas
let labDog = new Labrador("scoo" ,'black', 25);     //creating new object of Labrador clas

dog.speak();                                        // calling speak method of Dog class
labDog.speak();                                     // calling speak method of Labrador class