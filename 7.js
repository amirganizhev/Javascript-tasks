function func1(array) {

	for(let i = 0; i < array.length; i++) {
		if ((array[i] % 2) != 0) {
			return false
		} 
	}

	return true

}

console.log(func1([2, 1, 2]));

/*
Сделай функцию, которая 
принимает массив любых целых 
чисел, которая возращает истинну, 
если все элементы четные, если бы 
хотя бы один элемент не четный, то false.
*/