var yourCharacterActivated = false;
var enemyActivated = false;

var yourCharacter = {
	name: '',
	healthPoints: '',
	attackPower: '',
	counterAttackPower: 0,
};

var currentDefender = {
	name: '',
	healthPoints: '',
	attackPower: '',
};

var	Korr = {
	name: 'Korr',
	healthPoints: 100,
	attackPower: 4,
};

var Maz = {
	name: 'Maz',
	healthPoints: 120,
	attackPower: 8,
};
	
var Rey = {
	name: 'Rey',
	healthPoints: 150,
	attackPower: 12,
};

var Leia = {
	name: 'Leia',
	healthPoints: 180,
	attackPower: 16,
};

var availableCharacters = [Korr, Maz, Rey, Leia];
var character1 = $('#Korr');
var character2 = $('#Maz');
var character3 = $('#Rey');
var character4 = $('#Leia');

function reset() {
	console.log('reset');
	$('.resetGame').append($('.roster'));
	$('.roster').append(character1, character2, character3, character4);
	//$('.reset').hide();
	$('.attackButton').show();
	$('.duelStats').empty();
	$('.activeCharacter').show();
	yourCharacterActivated = false;
	enemyActivated = false;
	yourCharacter = {
		name: '',
		healthPoints: '',
		attackPower: '',
		counterAttackPower: 0,
	}
	wins = 0;
};

$('.character').on('click', function() {
	$('.duelStats').empty();
	if (enemyActivated === true) {
	}
	else if (yourCharacterActivated === true) {
		currentDefender.name = $(this).attr('id');
		for (i = 0; i < availableCharacters.length; i++)  {
			if (currentDefender.name === yourCharacter.name) {
				$('.duelStats').html('<p>' + 'Select your opponent.' + '</p>');
			}
			else if (currentDefender.name === availableCharacters[i].name) {
				$('.defender').append($(this));
				enemyActivated = true;
				currentDefender.healthPoints = availableCharacters[i].healthPoints;
				currentDefender.attackPower = availableCharacters[i].attackPower;
				console.log(currentDefender);
			}
		}
	}
	if (yourCharacterActivated === false) {
		$('#enemies').text('Enemies Available to Attack:');
		yourCharacter.name = $(this).attr('id');
		for (i = 0; i < availableCharacters.length; i++) {
			if (yourCharacter.name === availableCharacters[i].name) {
				$('.activeCharacter').append($(this));
				yourCharacterActivated = true;
				yourCharacter.healthPoints = availableCharacters[i].healthPoints;
				yourCharacter.attackPower = availableCharacters[i].attackPower;
				console.log(yourCharacter); 
			}
			else {
				$('.availableEnemies').append($('.roster'));
			}
		}
	}
});

var wins = 0;

$('.attack').on('click', function() {

	if (yourCharacterActivated === false) {
		$('.duelStats').html('<p>' + 'Select your character.' + '</p>');
	}
	else if (enemyActivated === false) {
		$('.duelStats').html('<p>' + 'Select your opponent.' + '</p>');
	}

	else {
		yourCharacter.counterAttackPower++;
		var currentPower = (yourCharacter.counterAttackPower * yourCharacter.attackPower);
		$('.duelStats').html('<p>' + 'You attacked ' + currentDefender.name + ' for ' + (currentPower) + ' points.' + '</p>');
		$('.duelStats').append('<p>' + currentDefender.name + ' attacked  you for ' + currentDefender.attackPower + ' points.' + '</p>');
		yourCharacter.healthPoints = (yourCharacter.healthPoints - currentDefender.attackPower);
		currentDefender.healthPoints = (currentDefender.healthPoints - currentPower);
		console.log(yourCharacter);
		console.log(currentDefender);
		
		if (currentDefender.healthPoints < 1) {
			$('.defender').empty();
			$('.duelStats').html('<p>' + 'You have defeated ' + currentDefender.name + '!' + '</p>');
			wins++;
			if (wins < 3) {
				enemyActivated = false;
			};
			if (wins === 3) {
				$('.attackButton').hide();
				var resetButton = $('<p>' + 'All of your enemies have been vanquished.' + '</p>' + '<p>' + '<button>' + 'Play again' + '</button>' + + '</p>');
				resetButton.attr('class', 'reset');
				$('.duelStats').append(resetButton);
				$('.reset').on('click', function() {
					console.log('reset');
					$('.resetGame').append($('.roster'));
					$('.roster').append(character1, character2, character3, character4);
					//$('.reset').hide();
					$('.attackButton').show();
					$('.duelStats').empty();
					$('.activeCharacter').show();
					yourCharacterActivated = false;
					enemyActivated = false;
					yourCharacter = {
						name: '',
						healthPoints: '',
						attackPower: '',
						counterAttackPower: 0,
					}
					wins = 0;
				});
			};
		}

		else if (yourCharacter.healthPoints < 1) {
			$('.activeCharacter').empty();
			$('.duelStats').html('<p>' + 'You have been defeated by ' + currentDefender.name + '.' + '</p>');
			$('.attackButton').hide();
			var resetButton = $('<button>' + 'Play again' + '</button>');
			resetButton.attr('class', 'reset');
			$('.duelStats').append(resetButton);
			$('.reset').on('click', function(){
				console.log('reset');
				$('.resetGame').append($('.roster'));
				$('.roster').append(character1, character2, character3, character4);
				//$('.reset').hide();
				$('.attackButton').show();
				$('.duelStats').empty();
				$('.activeCharacter').show();
				yourCharacterActivated = false;
				enemyActivated = false;
				yourCharacter = {
					name: '',
					healthPoints: '',
					attackPower: '',
					counterAttackPower: 0,
				}
				wins = 0;
			});
		}

		else {
			$('.duelStats').html('<p>' + 'Your Health Points: ' + yourCharacter.healthPoints + '</p>');
			$('.duelStats').append('<p>' + currentDefender.name + ' Health Points: ' + currentDefender.healthPoints + '</p>');
		}
	}
});


