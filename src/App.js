import './App.css';
import AddTodos from './components/AddTodos';
import Filter from './components/Filter';

import Todos from './components/Todos';


function App() {
  return (
    <div className="App">
      
      <div className="forum">
        <AddTodos />
        <Filter />
      </div>
      <Todos />
        
    </div>
  );
}

export default App;
