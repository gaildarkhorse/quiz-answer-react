import './App.css';
import QuizBox from './component/QuizBox';
import store from './store'
import { Provider } from 'react-redux';
import Control from './component/control/Control';
import Test from './component/Test';
import Table from './data/Table';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <QuizBox/>
          <Test />
          <Control />
          <Table />
        </Provider>
      </header>
    </div>
  );
}

export default App;
