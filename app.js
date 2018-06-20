// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
function loadEventListeners(){
  form.addEventListeners('submit', addTask);
}

// Add Task
function addTask(e){
  if(taskInput.value === ''){

  }

  e.preventDefault();
}














