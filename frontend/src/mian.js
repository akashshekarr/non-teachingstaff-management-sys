import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nts03 from './nts03';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nts03 /> }>
        </Route>
      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
