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
    addTaskBtn.click(getFormValues);

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
    store.tasks.push({
        taskName: taskName,
        taskDescription: taskDescription
    });
    console.log(store);
}

export default TaskForm;