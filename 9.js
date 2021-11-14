function func1(array) {

	let sum = 0;

	for(let i = 0; i < array.length; i++) {
		sum += array[i]
	}

	return Math.round(sum / array.length)

}

console.log(func1([1,2,3,4,5]));

/*
Написать функцию, которая 
принимает массив чисел, 
например [1,2,3,4,5] и функция 
возращает среднее арифметическое, 
(округлить результат до десятых)
*/