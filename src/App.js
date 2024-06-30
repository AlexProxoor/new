
import './App.css';

import Two from './components/[2]/Two';
import Three from './components/[3]/Three';
import TodoList from './components/[1]/TodoList';

function App() {
  return (
    <div className="app">
     <TodoList></TodoList>
     <Two></Two>
     <Three></Three>
    </div>
  );
}




export default App;
