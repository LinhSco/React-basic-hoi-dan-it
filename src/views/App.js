import logo from './logo.svg';
import './App.scss';
import MyComponent from './example/MyComponents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world with React.JS - LinhSco !!
        </p>
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
