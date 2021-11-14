function func1(numberWeek) {
	if(numberWeek == 1) {
		return ("Понедельник");
	} else if(numberWeek == 2) {
		return ("Вторник");
	} else if(numberWeek == 3) {
		return ("Среда");
	} else if(numberWeek == 4) {
		return ("Четверг");
	} else if(numberWeek == 5) {
		return ("Пятница");
	} else if(numberWeek == 6) {
		return ("Суббота");
	} else if(numberWeek == 7) {
		return ("Воскресенье");
	} else {
		return false
	}
}

console.log(func1(1));

/*
Сделайте функцию, которая принимает 
параметром число от 1 до 7, а возвращает 
день недели на русском языке.
*/