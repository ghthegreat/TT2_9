import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomePage } from './HomePage';
import { ErrorPage } from './ErrorPage';
import { NewClaims } from './create-claims-jh/NewClaims';
import { EditClaims } from './edit-claims/EditClaims';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/test' element={<ErrorPage></ErrorPage>}></Route>
        <Route path='/create-claims' element={<NewClaims />}></Route>
        <Route path='/edit-claims' element={<EditClaims />}></Route>

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
