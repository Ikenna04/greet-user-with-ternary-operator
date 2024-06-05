// Greet User

const d = new Date(),
	hour = d.getHours();
console.log(d);
console.log(`It is the ${hour} hour`);

hour < 10
	? (greet = 'Good Morning')
	: hour < 13
	? (greet = 'Good Day')
	: hour < 15
	? (greet = 'Good Afternoon')
	: hour < 20
	? (greet = 'Good Evening')
	: (greet = 'Good Night');
console.log(greet);
alert(greet);
