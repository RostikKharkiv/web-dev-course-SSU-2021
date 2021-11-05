function IsIsogram(input) {
	let symbols = input.toLowerCase().split('')
    return symbols.every((item, index) => index == symbols.indexOf(item));
}

console.log(IsIsogram("Dermatoglyphics"))
console.log(IsIsogram("aba"))
console.log(IsIsogram("moOse"))
console.log(IsIsogram(""))