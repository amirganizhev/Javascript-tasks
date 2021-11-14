function func1(sentences) {

	let a = sentences.split(".");

	let arr = [];

	for(let i = 0; i < a.length; i++) {

		let words = a[i].split(" ");
		
		if(words[0] == "") {
			arr.push(words[1]);
		} else {
			arr.push(words[0]);
		}
		
	}

	return arr;

}

console.log(func1("Деревья начинают менять. Яркие цвета. Под ногами шуршит. Наступила осень")); 
//Деревья, Яркие, Под, Наступила

/*
Написать функцию, которая принимает 
строку (в этом тексте 3-5 предложений), 
верните каждое первое слово в каждом 
предложении, через запятую.
*/