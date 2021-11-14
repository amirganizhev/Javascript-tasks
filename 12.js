function func1() {

	let salaries = {
  		John: 100,
  		Ann: 160,
  		Pete: 130
	}

	let salariesArr = Object.values(salaries);

	let sum = 0;

	for(let i = 0; i < salariesArr.length; i++) {
		sum += salariesArr[i];
	}

	if(salaries == {}) {
		return 0
	} else {
		return sum
	}

}

console.log(func1());

/*
У нас есть объект, в котором хранятся 
зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

Напишите код для суммирования всех зарплат 
и сохраните результат в переменной sum. 
Должно получиться 390.
Если объект salaries пуст, то результат должен быть 0.
*/
