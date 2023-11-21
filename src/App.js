import './App.css';
import QuizBox from './component/QuizBox';
import store from './store'
import { Provider } from 'react-redux';
import Table from './data/Table';
import HomepageToPDF from './data/ConvertToPDF';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';



function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          {/* <span className='App-header'>
              <Link to="/">Home</Link>
              <Link to="/table">Show Result</Link>
              <Link to='/download'>Download</Link>
          </span> */}
          <Routes>
            <Route exact path='/' element={<QuizBox />}></Route>
            <Route exact path='/table' element={<Table />}></Route>
            <Route exact path='/download' element={<HomepageToPDF />}></Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
