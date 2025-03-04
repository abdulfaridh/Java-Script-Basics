function handlecostkeydown(event)
{
if(event.key === 'Enter')
{
calculateTotal();
}
}

function calculateTotal()
{
	const inputElement = document.querySelector('.js-input');
	let calc = Number(inputElement.value); //.value ,will get the value that entered and save it in a variable
	                                       // also using Number() to convert the inputElement from string to num.
	if(calc < 40)
	{
		calc = calc + 10;
	}
	
	document.querySelector('.js-result').innerHTML = `$${calc}`;
	
}

function subscribe()
{
const buttonElement = document.querySelector('.js-subscribe-button');

if(buttonElement.innerText === 'Subscribe')// using innerText cuz innerHTML also counts the spaces inside the TXT
{
	buttonElement.innerHTML = 'Subscribed';
	buttonElement.classList.add('is-subscribed');
}
else if(buttonElement.innerText === 'Subscribed')
{
	buttonElement.innerHTML = 'Subscribe';
	buttonElement.classList.remove('is-subscribed');
}
}

