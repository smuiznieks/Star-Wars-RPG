//var yourCharacter = '';
//var character1 = $('#Korr');
//var character2 = $('#Maz');
//var character3 = $('#Rey');
//var character4 = $('#Leia');

//var korr = {
//	name: 'Korr',
//	healthPoints: 100,
//	attackPower: 4,
//	counterAttackPower: 10,
//	currentCharacter: false,
//}

//var maz = {
//	name: 'Maz',
//	healthPoints: 120,
//	attackPower: 6,
//	counterAttackPower: 15,
//	currentCharacter: false,
//}

//var rey = {
//	name: 'Rey',
//	healthPoints: 150,
//	attackPower: 8,
//	counterAttackPower: 20,
//	currentCharacter: false,
//}

//var leia = {
//	name: 'Leia',
//	healthPoints: 180,
//	attackPower: 10,
//	counterAttackPower: 25,
//	currentCharacter: false,
//}

//function newGame () {
//	character1.attr('value', korr);
//	character2.attr('value', maz);
//	character3.attr('value', rey);
//	character4.attr('value', leia);
//}

//newGame ();

$('.character').on('click', function () {
	yourCharacter = $(this).attr('id');
	console.log(yourCharacter);
	//console.log(this.name);
	//this.currentCharacter = true;
	//console.log(this.currentCharacter);
	//console.log(this.healthPoints);

})