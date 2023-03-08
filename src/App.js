import logo from './logo.svg';
import './App.css';
import Table from './getpage';
import Put from './putpage';
import { Route, Routes } from 'react-router-dom';
import Get from './entrypage';
import Deletion from './deletion';
import FirstPage from './firstpage';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<FirstPage/>}   />
      <Route path='/postvalue' element={<Get/>}   />
      <Route path='/getvalues' element={<Table/>}   />
      <Route path='/putvalues' element={<Put/>}/>
      <Route path='/deleteva' element={<Deletion/>}/>
      
     </Routes>
    </div>
  );
}

export default App;
