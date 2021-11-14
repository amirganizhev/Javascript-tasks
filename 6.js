function func1(name) {
	
	let date = new Date;
	let hours = date.getHours();

	if(hours >= 6 && hours < 11) {
		return (`Доброе утро ${name}`);
	} else if (hours >= 11 && hours < 17) {
		return (`Добрый день ${name}`);
	} else if (hours >= 17 && hours < 21) {
		return (`Добрый вечер ${name}`);
	} else {
		return (`Доброй ночи ${name}`);
	}
}

console.log(func1("Amir"));

/*
Написать функцию, которой передаем имя, 
и она возраващает приветствие в зависимости 
от времени суток (Доброе утро\день\вечер\ночи Иван)
*/