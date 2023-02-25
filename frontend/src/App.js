import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HomePage} from './HomePage';
import {ErrorPage} from './ErrorPage';
import {NewClaims} from './create-claims-jh/NewClaims'
import {EditClaims} from './edit-claims/EditClaims'
import UsersProvider from './providers/UserProvider';
import LoginPage from './LoginPage';
import Dashboard from './hyz/dashboard';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes >
      <Route path="/test" element={<ErrorPage></ErrorPage>}></Route>
      <Route path="/login" element={<UsersProvider><LoginPage></LoginPage></UsersProvider>}></Route>
      <Route path="/create-claims" element = {<NewClaims/>}></Route>
      <Route path="/edit-claims" element = {<EditClaims/>}></Route>
      <Route index element={<HomePage></HomePage>}></Route>
        <Route index element={<HomePage></HomePage>} />

        {/* add new route here
        <Route path="/your-path" element={<yourElement>}
         */}

         <Route  path="/dashboard" element={<Dashboard/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
