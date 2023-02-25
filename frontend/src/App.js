//import './App.css';
import "./"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import {HomePage} from './HomePage';
import {ErrorPage} from './ErrorPage';
//import {loginForm} from './login-pranati/loginForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from "./login-pranati/LoginForm";


function App() {
  return (
    <Router>
      <Routes >
      <Route path="/test" element={<ErrorPage></ErrorPage>}></Route>
      <Route path="/login" element={<LoginForm/>}></Route>  
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
