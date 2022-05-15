import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen bg-yellow-500 '>
        <Navbar />
        <main className='text-black text-xl items-center flex justify-center '>Content</main>
        <Footer />
      </div>
   </Router>

  );
}

export default App;
