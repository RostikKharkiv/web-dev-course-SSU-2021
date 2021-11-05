function BinaryWord(word){
	return word.split('').map(symbol => {
		return symbol.charCodeAt(0).toString(2).padStart(8, '0')
	})
}

console.log(BinaryWord("man"))
console.log(BinaryWord("AB"))
console.log(BinaryWord("wecking"))
console.log(BinaryWord("Ruby"))
console.log(BinaryWord("Yosemite"))