import './App.css';
import "./"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import {HomePage} from './HomePage';
import {ErrorPage} from './ErrorPage';


function App() {
  return (
    <Router>
      <Routes >
      <Route path="/test" element={<ErrorPage></ErrorPage>}></Route>
        <Route index element={<HomePage></HomePage>}>

        {/* add new route here
        <Route path="/your-path" element={<yourElement>}
         */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
