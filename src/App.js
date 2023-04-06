import logo from './logo.svg';
import './App.css';
// import redux from './redux/index'
import { Provider } from 'react-redux'
import store from './redux/index'
import Counter from './components/Counter';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Counter></Counter>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Provider>

  );
}

export default App;
