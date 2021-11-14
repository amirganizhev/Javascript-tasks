function func1(number, string) {

	let a = "";
	let result = [];

	for(let i = 0; i < string.length; i++) {
		a += string[i]; 
		//console.log(a);
		if(a.length == number) {
			result.push(a);
			a = "";
		}	
	}

	if(a.length < number) {
		result.push(a);
	}

	return result
}

console.log(func1(3, "rupturewort"));

/*
написать функцию, которая принимае 1-ым параметром
максимальное количество символов в массиве, а 2-ым строку которую
нужно разбить. Пример ниже:
console.log(func1(3, "rupturewort")); //ВЫВОД: "rup" "tur" "ewo" "rt"
*/