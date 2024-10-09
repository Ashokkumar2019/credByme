import { useState } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Showdata from './component/Showdata';
import Edit from './component/Edit';
import Newdata from './component/Newdata';
import Delete from './component/Delete';
import Fetchdata from './component/Fetchdata';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Link to={`/`}>Back to Home</Link>
      <Routes>
        <Route path="/" element={<Fetchdata />} />
        <Route path="/edit/:eid" element={<Edit />} />
        <Route path="/delete/:id" element={<Delete />} />
        <Route path="/newdata" element={<Newdata />} />
      </Routes>
    </>
  );
}

export default App;
