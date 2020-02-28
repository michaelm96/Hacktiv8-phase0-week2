// 1. Menyusun Barisan Bintang

var rows1 = 5;
for (var i = 0; i < rows1; i++) {
	console.log('*');
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = 5;
for (var j = 0; j < rows2; j++) {
	var char = '';
	for (var k = 0; k < rows2; k++) {
		char += '*';
	}
	console.log(char);
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3 = 5;
for (var l = 0; l < rows3; l++) {
	var char = '';
	for (var m = 0; m <= l; m++) {
		char += '*';
	}
	console.log(char);
}
