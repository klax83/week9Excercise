// var stringArray = [
// 	"red", "blue", "green", "yellow", "brown"
// ]

// console.log("Length of array: " + stringArray.length)

// for(var i = 0; i < stringArray.length; i++) {
// 	console.log(stringArray[i].length)
// }

// // stringArray.reverse()
// // console.log(stringArray)

// function copynrev() {

// 	var copyStringArray = [];

// 	for(var i = 0; i < stringArray.length; i ++) {
// 		copyStringArray.push(stringArray[i]);
// 	}
// 	copyStringArray.reverse();
// 	console.log(copyStringArray)

// }

// copynrev()
// stringArray.sort();
// console.log(stringArray);

// var numArray = [ 23 , 44 , 33 , 34 , 32 ]
// numArray.sort(
// 	function(a, b) {
// 		return a - b;
// 	}
// )
// console.log(numArray);

// numArray.sort(
// 	function(a, b) {
// 		return b - a;
// 	}
// )
// console.log(numArray);

// var newStringArray = [ "Apple" , "Banana" , "Cherry"];
// newStringArray.push("Date");
// newStringArray.push("Egg");
// newStringArray.shift();

// console.log(newStringArray);

var x = [];

function fun() {
	var value = document.getElementsByTagName('input')[0].value;
	x.push(value);
	document.getElementsByTagName('ul')[0].innerText = '';
	for(var i = 0; i < x.length; i++) {

		var li = document.createElement('li');

		li.textContent = x[i];
		document.getElementsByTagName('ul')[0].appendChild(li);
	}

}