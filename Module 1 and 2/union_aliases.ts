// UNION TYPES & LITERAL TYPES & TYPE ALIASES

// type aliases
type Combinable = number | string;
type ConversionDescriptor =  'as_number' | 'as_text'

function combine(
	input1: Combinable, 
	input2: Combinable, 
	resultConversion:ConversionDescriptor
) {

	let result;

	if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === "as_number") {
		result = +input1 + +input2;
	} else {
		result = input1.toString() + input2.toString()
	}

	return result

	// if(resultConversion === 'as_number') {
	// 	return +result;
	// } else {
	// 	return result.toString()
	// }
	
}

const combinedAges = combine(30, 26, 'as_number')
console.log(combinedAges)

const combinedStringAges = combine("30", "26", 'as_number')
console.log(combinedStringAges)

const combinedName = combine('Max', "Anna", "as_text");
console.log(combinedName)