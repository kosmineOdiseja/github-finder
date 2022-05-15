import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <div className='flex justify-between flex-col bg-yellow-500 '>
        <Navbar />
        <main className=''> Content </main>
      </div>

   </Router>

  );
}

export default App;
