/*
Quiz app
1. Ask at least 5 questions
2. Keep track of right answers
3. Provide a final message about # of answers correct
4. Give a gold crown for 5 correct, silver for 4, bronze for 3


1. What is the original name of the Hazbin Hotel?
2. What is the first name of the Radio Demon?
3. Inside every demon there is a what? 
4. Who is Charlie's girlfriend?
5. Who is Angle Dust's gal pal?

*/

//start with a score of zero of course
var score = 0;

//five questions each with a prompt that tells you your score and adds +1 is you are correct
var question1 = prompt('What is the original name of the Hazbin Hotel?');

if (question1.toUpperCase() === 'HAPPY HOTEL') {
	score = score + 1
}

var question2 = prompt(score + ' of 5 correct. ' + 'What is the first name of the Radio Demon?');

if (question2.toUpperCase() === 'ALASTOR') {
	score = score + 1
}

var question3 = prompt(score + ' of 5 correct. ' + 'Inside every demon there is a what? ');

if (question3.toUpperCase() === 'RAINBOW' || question3.toUpperCase() === 'LOST CAUSE') {
	score = score + 1
}

var question4 = prompt(score + ' of 5 correct. ' + 'Who is Charlie\'s girlfriend?');

if (question4.toUpperCase() === 'VAGGIE') {
	score = score + 1
}

var question5 = prompt(score + ' of 5 correct. ' + 'Who is Angle Dust\'s gal pal?');

if (question5.toUpperCase() === 'CHERRYBOMB' || question5.toUpperCase() ===  'CHERRY BOMB') {
	score = score + 1
}


//Final showing of your score and a message/picture based on your score
if (score === 5) {
	document.write (score + ' of 5 correct. ' + '<p>Congratulations you really know your Hazbin Hotel!!</p>' + '<img src = https://imgur.com/jczLEuF.jpg>')
} else if (score === 4) {
	document.write (score + ' of 5 correct. ' + '<p>You\'ve certainly watched Hazbin Hotel!</p>' + '<img src = https://imgur.com/67OIFXz.jpg>')
} else if (score === 3) {
	document.write (score + ' of 5 correct. ' + '<p>Not bad but you could watch Hazbin Hotel again.</p>' + '<img src = https://imgur.com/I0uLMhV.jpg>')
} else if (score === 2) {
	document.write (score + ' of 5 correct. ' + '<p>Maybe try watching Hazbin Hotel again.</p>')
} else {
	document.write (score + ' of 5 correct. ' + '<p>Have you seen Hazbin Hotel? You should check it out on YouTube.</p>')

}
