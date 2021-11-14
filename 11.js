function func1(array) {

	for(let i = 0; i < array.length; i++) {
		let obj = array[i];
		let objArr = Object.values(obj);
		for(let j = 0; j < objArr.length; j++) {
			console.log(`Имя: ${objArr[0]}, взраст: ${objArr[1]}`);
		}
	}

}

console.log(func1([{name: 'Иван', age: 23}, {name: 'Амир', age: 25}]));

/*
Написать функцию, которая 
принимает массив сотрудников, 
каждый сотрудник имеет имя 
и возраст ([{name: 'Иван', age: 23},...]) 
и возвращает массим, где каждый элемент 
представляет из себя строку "Имя: Иван, возвраст: 23".
*/