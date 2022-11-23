// const person: {
// 	name: string;
// 	age: number;
// 	hobbies: string[];
// 	role: [number, string]; // tuple type
// } = {
// 	name: "Alvaro",
// 	age: 31,
// 	hobbies: ['sports', 'cooking'],
// 	role: [2, 'author']
// };

enum Role { ADMIN = 5, READ_ONLY, AUTHOR }; //

const person = {
	name: "Alvaro",
	age: 31,
	hobbies: ['sports', 'cooking'],
	role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name)

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
}

if(person.role === Role.AUTHOR) {
	console.log('is author');
}