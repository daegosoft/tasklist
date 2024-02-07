// import logo from './logo.svg';
import { CardsCategory } from '../Cards';
import { Header } from '../Header';
import { TableData } from '../Table';
import { TaskProvider } from '../contexts';
import './App.css';

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <header className="App-header">
          <Header />
        </header>
        <CardsCategory >
          <TableData />
        </CardsCategory>
      </TaskProvider>
    </div>
  );
}

export default App;
