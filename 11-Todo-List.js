const todoList = []; // empty array

renderToDoList();

function renderToDoList()
{
let todoListHTML = '';

for(let i = 0 ; i < todoList.length ; i++)
{
const todoObject = todoList[i];
const name = todoObject.name;
const dueDate = todoObject.dueDate;

const html = `<div>${name}</div> <div>${dueDate}</div> 
		  <button class = "delete-button" onclick = "todoList.splice(${i},1);
		   renderToDoList();">Delete</button>`;

todoListHTML += html;
}

document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}
function addToDo()
{
	const inputElement = document.querySelector('.js-todo');
	const name = inputElement.value;

	const inputDate = document.querySelector('.js-dueDate');
	const dueDate = inputDate.value;

	todoList.push({ name , dueDate});

	inputElement.value = '';
	

	renderToDoList();
}
