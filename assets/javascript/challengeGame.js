var yourCharacterActivated = false;
var enemyActivated = false;
var wins = 0;

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
	attackPower: 4,
};

var Maz = {
	name: 'Maz',
	attackPower: 8,
};
	
var Rey = {
	name: 'Rey',
	attackPower: 12,
};

var Leia = {
	name: 'Leia',
	attackPower: 16,
};

var availableCharacters = [Korr, Maz, Rey, Leia];

var character1 = $('#Korr');
var character2 = $('#Maz');
var character3 = $('#Rey');
var character4 = $('#Leia');

$(document).ready(function() {
	$('.restartButton').hide();
});

function restart() {
	console.log('reset');
	yourCharacterActivated = false;
	enemyActivated = false;
	wins = 0;
	yourCharacter = {
		name: '',
		healthPoints: '',
		attackPower: '',
		counterAttackPower: 0,
	};
	currentDefender = {
		name: '',
		healthPoints: '',
		attackPower: '',
	};
	$('.resetGame').append($('.roster'));
	$('.roster').append(character1, character2, character3, character4);
	$('.attackButton').show();
	$('.restartButton').hide();
	$('.duelStats').empty();
	$('.activeCharacter').show();
	$('.defender').show();
	$('#enemies').empty();	
};

function chooseCharacter() {
	$('.duelStats').empty();
	if (enemyActivated === true) {
	}
	else if (yourCharacterActivated === true) {
		currentDefender.name = $(this).attr('id');
		currentDefender.healthPoints = $(this).attr('value');
		console.log(currentDefender.healthPoints);
		for (i = 0; i < availableCharacters.length; i++)  {
			if (currentDefender.name === yourCharacter.name) {
				$('.duelStats').html('<p>' + 'Select your opponent.' + '</p>');
			}
			else if (currentDefender.name === availableCharacters[i].name) {
				$('.defender').append($(this));
				enemyActivated = true;
				currentDefender.attackPower = availableCharacters[i].attackPower;
				console.log(currentDefender);
			}
		}
	}
	else if (yourCharacterActivated === false) {
		$('#enemies').text('Enemies Available to Attack:');
		yourCharacter.name = $(this).attr('id');
		yourCharacter.healthPoints = $(this).attr('value');
		console.log(yourCharacter.healthPoints)
		for (i = 0; i < availableCharacters.length; i++) {
			if (yourCharacter.name === availableCharacters[i].name) {
				$('.activeCharacter').append($(this));
				yourCharacterActivated = true;
				yourCharacter.attackPower = availableCharacters[i].attackPower;
				console.log(yourCharacter); 
			}
			else {
				$('.availableEnemies').append($('.roster'));
			}
		}
	}
};

function attack() {
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
				$('.duelStats').html('<p>' + 'All of your enemies have been vanquished.' + '</p>' + '<br>')
				$('.attackButton').hide();
				$('.restartButton').show();
			};
		}
		else if (yourCharacter.healthPoints < 1) {
			$('.activeCharacter').hide();
			$('.defender').hide();
			$('.duelStats').html('<p>' + 'You have been defeated by ' + currentDefender.name + '.' + '</p>');
			$('.attackButton').hide();
			$('.restartButton').show();
		}
		else {
			$('.duelStats').html('<p>' + 'You attacked ' + currentDefender.name + ' for ' + currentPower + ' damage.' + '</p>');
			$('.duelStats').append('<p>' + currentDefender.name + ' attacked you for ' + currentDefender.attackPower + ' damage.' + '</p>');
		}
	}
}

$('.character').on('click', chooseCharacter);
$('#attack').on('click', attack);
$('#restart').on('click', restart);




