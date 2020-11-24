// Create a todo list app with javascript and html


let list = document.getElementById('list')
let taskForm = document.getElementById('task-form')

taskForm.addEventListener('submit', function(e){
	e.preventDefault()
	let task = document.getElementById('task')
	let listItem = document.createElement('li')
	listItem.innerHTML = task.value;
	list.appendChild(listItem)
	task.value = ''
})