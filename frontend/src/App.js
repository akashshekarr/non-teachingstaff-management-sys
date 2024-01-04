import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nts03 from './nts03'; // Correct the import statement
import Dept03 from './dept';
import Homepage from './homepage';
import CreateNts03 from './CreateNts03';
import Pos03 from './position';
import Sal03 from './salary';
import Leave03 from './ntsleave';
import CreateDept03 from './AddDept';
import CreatePos03 from './AddPos';
import CreateSal03 from './AddSal';
import CreateLeave03 from './Addleave';
import Updatents from './Updatents';
import Updatedept from './Updatedept';
import Updatepos from './Updatepos';
import Updatesal from './Updatesal';
import Updateleave from './Updatelev';
import InputForm from './report';
import InputForm1 from './levreport';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/nts03" element={<Nts03 />} />
          <Route path="/dept" element={<Dept03 />} />
          <Route path="/salary" element={<Sal03 />} />
          <Route path="/ntsleave" element={<Leave03 />} />
          <Route path="/position" element={<Pos03 />} />
          <Route path="/create" element={<CreateNts03 />} />
          <Route path="/create1" element={<CreateDept03 />} />
          <Route path="/create2" element={<CreatePos03 />} />
          <Route path="/create3" element={<CreateSal03 />} />
          <Route path="/create4" element={<CreateLeave03 />} />
          <Route path="/Updatents/:NTS_ID" element={<Updatents/>} />
          <Route path="/Updatedept/:NTS_ID" element={<Updatedept/>} />
          <Route path="/Updatepos/:NTS_ID" element={<Updatepos/>} />
          <Route path="/Updatesal/:NTS_ID" element={<Updatesal/>} />
          <Route path="/Updatelev/:NTS_ID" element={<Updateleave/>} />
          <Route path="/report" element={<InputForm/>} />
          <Route path="/levreport" element={<InputForm1/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
