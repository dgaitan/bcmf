// Create a todo list app with javascript and html


let list = document.getElementById('list')
let addTaskButton = document.getElementById('add-task')

addTaskButton.addEventListener('click', function(){
	let task = document.getElementById('task')
	let listItem = document.createElement('li')
	listItem.innerHTML = task.value;
	list.appendChild(listItem)
	task.value = ''
})