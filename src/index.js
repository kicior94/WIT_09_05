import Navigation from './components/Navigation.js';
import TaskForm from './components/TaskForm.js';
import TaskList from './components/TaskList.js';


const root = $('#root');
const navigation = Navigation('Navbar');
const taskForm = TaskForm();
const taskList = TaskList();
root.append(navigation);
root.append(taskForm);
root.append(taskList);