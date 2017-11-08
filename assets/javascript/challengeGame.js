var characterActivated = false;
var enemyActivated = false;

var currentGame = {
	healthPoints: '',
	attackPower: '',
	counterAttackPower: '',
};

var currentEnemy = {
	healthPoints: '',
	attackPower: '',
	counterAttackPower: '',
};

var	Korr = {
	name: 'Korr',
	healthPoints: 100,
	attackPower: 4,
	counterAttackPower: 10,
	enemy: '',
};

var Maz = {
	name: 'Maz',
	healthPoints: 120,
	attackPower: 6,
	counterAttackPower: 15,
	enemy: '',
};
	
var Rey = {
	name: 'Rey',
	healthPoints: 150,
	attackPower: 8,
	counterAttackPower: 20,
	enemy: '',
};

var Leia = {
	name: 'Leia',
	healthPoints: 180,
	attackPower: 10,
	counterAttackPower: 25,
	enemy: '',
};

var characters = [Korr, Maz, Rey, Leia];

$('.character').on('click', function() {
	var yourCharacter = $(this).attr('id');
	console.log(yourCharacter);
	if (characterActivated === false) {
		for (i = 0; i < characters.length; i++) {
			if (yourCharacter === characters[i].name) {
				$('.activeCharacter').append($(this));
				characterActivated = true;
				characters[i].enemy = false;
				currentGame.healthPoints = characters[i].healthPoints;
				currentGame.attackPower = characters[i].attackPower;
				currentGame.counterAttackPower = characters[i].counterAttackPower;
				console.log(currentGame); 
			}
			if (characters[i].enemy !== false) {
				$()
				console.log(characters[i].name + characters[i].enemy);
			}
		}
	}
})

$('.availableEnemies').on('click', function() {
	var yourEnemy = $(this).attr('id');
})