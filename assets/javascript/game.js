var winsTotal = 0;
var lossesTotal = 0;

var correctAnswer = '';
var blue = '';
var green = '';
var pink = '';
var purple = '';
var guess = 0;

var button1 = $('#button-1');
var button2 = $('#button-2');
var button3 = $('#button-3');
var button4 = $('#button-4');

function getNewNumber() {
	correctAnswer = Math.floor((Math.random() * 101) + 19);
	blue = Math.floor((Math.random() * 3) + 10);
	green = Math.floor((Math.random() * 3) + 7);
	pink = Math.floor((Math.random() * 3) + 4);
	purple = Math.floor((Math.random() * 3) + 1);
	guess = 0;
	button1.attr('value', blue);
	button2.attr('value', green);
	button3.attr('value', pink);
	button4.attr('value', purple);
	console.log(correctAnswer);	
	console.log(blue, green, pink, purple);
	$('#randomNumber').text(correctAnswer);
	$('#wins').text(winsTotal);
	$('#losses').text(lossesTotal);
}

getNewNumber();

$('.crystal').on('click', function() {
	var currentCrystal = parseInt($(this).attr('value'));
	guess = guess + currentCrystal;
	$('#yourScore').text(guess);

	if (correctAnswer === guess) {
		$('#mesage').empty();
		$('#message').text('You win!');
		$('#yourScore').empty();
		winsTotal++;
		getNewNumber();
	};

	if (correctAnswer < guess) {
		$('#mesage').empty();
		$('#message').text('You lose! Try again.');
		$('#yourScore').empty();
		lossesTotal++;
		getNewNumber();
	};
})

