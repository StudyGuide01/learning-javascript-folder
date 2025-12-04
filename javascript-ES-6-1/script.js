class Person {
	name;
	age;

	constructor(name,age) {
		this.name = name;
		this.age = age;
	}
	greet() {
		console.log('good morning');
	}

};

class GreatPerson extends Person{
attitude = 'cool';

}

const obj3 = new GreatPerson('john',23);
console.log(obj3.name);
console.log

const obj1 = new Person('javed');
const obj2 = new Person('samir');

const sayGM = obj1.greet();
// console.log(typeof sayGM);
console.log(obj2);