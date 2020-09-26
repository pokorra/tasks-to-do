document.addEventListener('DOMContentLoaded', function(){

    const selectTasks = document.getElementById('selectTasks');
    let selectedTask = '';

    const task = document.getElementById('taskInput');
    const butTask = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
    const doneList = document.getElementById('finishedList');
    const resetButton = document.getElementById('removeFinishedTasksButton');

    selectTasks.addEventListener('change', (event) => {
        selectedTask = event.target.value;
        console.log(selectedTask);
    });

    function addTask(){
        const taskContainer = document.createElement('li');
        taskContainer.classList.add('taskcontainer');
        const newTask = document.createElement('p');
        const newCheckbox = document.createElement('input');
        newCheckbox.type = 'checkbox';
        newCheckbox.value = 'value';
        newCheckbox.classList.add('checkbox');

        if (selectedTask !== ''){
            newTask.innerText = selectedTask;
            selectedTask = '';
        } else if (task.value === '') {
            console.log('pusta misja')
            return;
        } else {
        
        newTask.innerText = task.value;
        }
        taskList.appendChild(taskContainer);
        taskContainer.appendChild(newTask);
        taskContainer.appendChild(newCheckbox);
        task.value = '';
            newCheckbox.addEventListener('change', function(){
                taskContainer.removeChild(newCheckbox);
                taskList.removeChild(taskContainer);
                doneList.appendChild(taskContainer);
            })
            resetButton.addEventListener('click', function(){
                doneList.innerHTML = '';
            })   
    };
    butTask.addEventListener('click', addTask);

})

