function multiplyNumeric(obj) {

	let objArr = Object.values(obj);

	let objArrMultiply;

	for(let i = 0; i < objArr.length; i++) {

		if(typeof objArr[i] === 'number') {
			objArrMultiply = objArr[i] * 2;
		}

		if(typeof objArr[i] === 'string') {
			objArrMultiply = objArr[i];
		}

		console.log(objArrMultiply)

	}
	
}

console.log(multiplyNumeric({width: 200, height: 300, title: "My menu"}));

/*
Создайте функцию multiplyNumeric(obj), 
которая умножает все числовые свойства 
объекта obj на 2.
*/