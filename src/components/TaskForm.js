import { store } from '../index.js';

const TaskForm = () => {
    const taskNameInput = $(document.createElement('input'));
    taskNameInput.attr({
        class: 'form-control',
        placeholder: 'Task name...',
        id: 'taskNameInput'
    });

    const taskDescriptionInput = $(document.createElement('textarea'));
    taskDescriptionInput.attr({
        class: 'form-control my-3',
        placeholder: 'Task description...',
        id: 'taskDescriptionInput'
    });

    const addTaskBtnWrapper = $(document.createElement('div'));
    addTaskBtnWrapper.attr({
        class: "d-flex justify-content-center"
    });

    const addTaskBtn = $(document.createElement('button'));
    addTaskBtn.html('Add Task');
    addTaskBtn.attr({
        class: 'btn btn-dark'
    });
    addTaskBtn.click(createNewTask);

    addTaskBtnWrapper.append(addTaskBtn);

    const taskForm = $(document.createElement('div'));
    taskForm.attr({
        class: 'container my-5'
    })

    taskForm.append([taskNameInput, taskDescriptionInput, addTaskBtnWrapper]);

    return taskForm;
};

function getFormValues(){
    const taskName = $('#taskNameInput').val();
    const taskDescription = $('#taskDescriptionInput').val();
    
    return {
        taskName: taskName,
        taskDescription: taskDescription
    };
}

function createNewTask(){
    const tr = $(document.createElement('tr'));
    const td_number = $(document.createElement('td'));
    const td_taskName = $(document.createElement('td'));
    const td_taskDescription = $(document.createElement('td'));

    const taskDetails = getFormValues();
    td_number.html('1');
    td_taskName.html(taskDetails.taskName);
    td_taskDescription.html(taskDetails.taskDescription);

    tr.append([td_number, td_taskName, td_taskDescription]);
    $('#tableBody').append(tr);
}

export default TaskForm;