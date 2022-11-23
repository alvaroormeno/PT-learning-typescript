
interface AddFn {
	(a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
	return n1 + n2
}



interface Named {
	readonly name?: string;
}

interface Greetable extends Named {
	greet(phrase: string): void;
}

class Person implements Greetable {
	name?: string;
	age= 31;

	constructor(n?: string) {
		if(n) {
			this.name = n
		}
		
	}

	greet(phrase: string) {
		if (this.name) {
			console.log(phrase + ' ' + this.name);
		} else {
			console.log('Hi!! no Name!')
		}
		
	}
}

let user1: Greetable

user1 = new Person ();


user1.greet("hi there - iam")
console.log(user1)