//Melakukan Looping Menggunakan While

console.log('LOOPING PERTAMA');
var i = 0;
while (i <= 20) {
	console.log(i + ' - I love coding');
	i += 2;
}
console.log('LOOPING KEDUA');
var j = 20;
while (j >= 0) {
	console.log(j + ' - I will become fullstack developer');
	j -= 2;
}

//Melakukan Looping Menggunakan For

console.log('LOOPING PERTAMA');
for (var k = 1; k <= 20; k++) {
	console.log(k + ' - I love coding');
}
console.log('lOOPING KEDUA');
for (var l = 20; l >= 1; l--) {
	console.log(l + ' - I will become fullstack developer');
}

// Ganjil Genap

for (var i = 1; i <= 100; i++) {
	if (i % 2 == 0) {
		console.log('Genap');
	} else if (i % 2 !== 0) {
		console.log('Ganjil');
	}
}
console.log("");

for (var j = 1; j <= 100; j+=2){
	if(j % 3 == 0){
		console.log(j + " kelipatan 3");
	}else{
		
	}
}

console.log("");
for (var k = 1; k <= 100; k+=5){
	if(k % 6 == 0){
		console.log(k + " kelipatan 6");
	}else{
		
	}
}

console.log("");
for (var l = 1; l <= 100; l+=9){
	if(l % 10 == 0){
		console.log(l + " kelipatan 10");
	}else{
		
	}
}
