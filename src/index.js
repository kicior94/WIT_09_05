import Navigation from './components/Navigation.js';
import TaskForm from './components/TaskForm.js';


const root = $('#root');
const navigation = Navigation('Navbar');
const taskForm = TaskForm();
root.append(navigation);
root.append(taskForm);