class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    ageComparison(person) {
        if(this.age > person.age) {
            console.log(this.name + " è più vecchio di " + person.name)
        } else if (this.age < person.age) {
            console.log(person.name + " è più vecchio di " + this.name)
        } else {
            console.log(this.name + " ha la stessa età di " + person.name)
        }
    }
}

let person1 = new Person("giacomo", 35)
console.log(person1)
let person2 = new Person("alfredo", 25)
console.log(person2)
let person3 = new Person("mimmo", 25)
console.log(person2)

person3.ageComparison(person2)

