import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom'

import MenuBar from './components/navigation/MenuBar'
import Home from './components/pages/Home'
import TestResults from './components/pages/TestResults'
import Subjects from './components/pages/Subjects'
import Programs from './components/pages/Programs'
import Settings from './components/pages/Settings'
import ProgramSubjects from './components/pages/ProgramSubjects'

import "./App.css";
import "./components/pages/Body.css"

function App() {
  return (
    <div>
      <div className="body-wrap">
        <Router>
          <MenuBar />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/TestResults' element={<TestResults />} />
              <Route path='/Subjects' element={<Subjects />} />
              <Route path='/Programs' element={<Programs />} />
              <Route path='/Settings' element={<Settings />} />
              <Route exact path='/ProgramSubjects' element={<ProgramSubjects />} />
            </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
