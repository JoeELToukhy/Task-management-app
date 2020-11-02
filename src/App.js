import logo from './logo.svg';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App m-5">
      <TaskInput/>
      <TaskList/>
    </div>
  );
}

export default App;
