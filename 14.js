function func1(str) {
	
	let arr = [];
	let arr2 = [];

	for(let i = 0; i < str.length; i++) {
		arr.push(str[i]);
		arr2.push(str[i])
	}

	let reverse = arr.reverse().join("");
	let arr3 = arr2.join("").toLowerCase();
	
	if (arr3 === reverse) {
		return true
	} else {
		return false
	}

}

console.log(func1("Amir"));

/*
Написать функцию, которая проверяет 
является ли строка палиндромом. 
Вернуть false или true.
*/