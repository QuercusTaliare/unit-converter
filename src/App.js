import './App.css';
import Header from './components/Header';
import Variable from './components/Variable';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="variable-container">
        <Variable location="left" />
        <Variable location="right" />
      </div>
    </div>
  );
}

export default App;
