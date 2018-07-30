// Define UI varibales
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners(){
    // Add task event
    form.addEventListener('submit', addTask);
    // remove task event
    taskList.addEventListener('click', removeTask);
    // Clear task event
    clearBtn.addEventListener('click', clearTasks);
}

// Add Task
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task');
    }

    //create li element
    const li = document.createElement('li');
    //Add class
    li.className = 'collection-item';
    // create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element

    const link = document.createElement('a');
    //Add class
    link.className = 'delete-item secondary-content';

    // Add icon html
    link.innerHTML = '<i class = "fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);

    // Append the li to the ul

    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';

    e.preventDefault();
}

// Remove Task
function removeTask(e){
     if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
        }
    }
}

// clear Task
function clearTasks(){
    //taskList.innerHTML = '';

    //Faster
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }

    //https://jsperf.com/innerhtml-vs-removechild
}