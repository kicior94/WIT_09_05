import Navigation from './components/Navigation.js';
import TaskForm from './components/TaskForm.js';
import TaskList from './components/TaskList.js';
import Tasks from './components/Tasks.js';


const root = $('#root');
const tasks = Tasks();
const navigation = Navigation('WIT To-Do App');
const taskForm = TaskForm();
const taskList = TaskList(tasks);
root.append(navigation);
root.append(taskForm);
root.append(taskList);