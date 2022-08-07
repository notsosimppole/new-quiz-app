import './App.css';
import Main from './Main';
import {Routes, Route} from 'react-router-dom'
import Quiz from './Quiz';


function App() {
  return (
      <div className="App">
        <Routes>
          <Route path = "/" exact element = {<Main />}/>
          <Route path = "/quiz" element = {<Quiz />}/>
        </Routes>
      </div>
  );
}

export default App;
