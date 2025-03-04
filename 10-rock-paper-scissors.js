// lets create a object to store score.

let score = JSON.parse(localStorage.getItem('score')); //we are converting the JSON string back into a object

if(score === null)
{
//giving a default score since cant read null
score = {
wins : 0,
losses : 0,
tie : 0
};

}

updateScoreElements();

function playGame(playerMove)
{


pickedcomputerMove();

let result = ''; 

if(playerMove === 'Rock')
{

if(computerMove === 'Rock')
{
	result = 'Tie.';
}
else if(computerMove === 'Paper')
{
	result = 'You Lose.';
}
else if (computerMove === 'Scissors')
{
	result = 'You win.';
}

}

else if(playerMove === 'Paper')
{

if(computerMove === 'Paper')
{
	result = 'Tie.';
}
else if(computerMove === 'Scissors')
{
	result = 'You Lose.';
}
else if (computerMove === 'Rock')
{
	result = 'You win.';
}

}

else if(playerMove === 'Scissors')
{

if(computerMove === 'Scissors')
{
	result = 'Tie.';
}
else if(computerMove === 'Rock')
{
	result = 'You Lose.';
}
else if (computerMove === 'Paper')
{
	result = 'You win.';
}

}

if( result === 'You win.')
{

score.wins += 1;

}

else if( result === 'You Lose.')
{

score.losses += 1;

}

else if( result === 'Tie.')
{

score.tie += 1;

}

localStorage.setItem('score', JSON.stringify(score)); //converting the JS object into a JSON string.

updateScoreElements();

document.querySelector('.js-result')
.innerHTML = result;

console.log(`${playerMove}`);


document.querySelector('.js-moves').innerHTML = `You<img src="file:///C:/Users/css160798/Desktop/JS-Course/${playerMove}-emoji.png" class="move-icon"> 
<img src="file:///C:/Users/css160798/Desktop/JS-Course/${computerMove}-emoji.png" class="move-icon"> Computer`;
}


let computerMove = ''; //making the computerMove global, because if its inside the function it ends within the function.

function updateScoreElements()
{
 document.querySelector('.js-score').innerHTML =`Wins: ${score.wins} Losses : ${score.losses} Tie : ${score.tie}`;
}

function pickedcomputerMove()
{
const Random = Math.random();

if(Random >= 0 && Random < 1/3)
{
computerMove = 'Rock';
}
else if( Random >= 1/3 && Random < 2/3)
{
computerMove = 'Paper';
}
else if(Random >= 2/3 && Random < 1)
{
computerMove = 'Scissors';
}

console.log(computerMove);
}	
