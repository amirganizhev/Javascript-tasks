function func1(array) {

	let emptyArray = [];

	for(let i = 0; i < array.length; i++) {
		if((array[i] % 5) === 0) {
			emptyArray.push(array[i])
		}
	}

	return emptyArray

}

console.log(func1([1, 2, 5, 12, 15, 21]))
/*
Сделай функцию, которая принимает 
массив любых целых чисел, которая 
возращает новый массив, где все 
элементы кратны пяти. 
([1,2,5,12,15,21] вернет [5,15])
*/