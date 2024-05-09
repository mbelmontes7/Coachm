import React from 'react';
import Navbar from './Components/Navbar'; // assuming Navbar.jsx is in the same directory
import logo from './assets/logo.svg'; // Import SVG as an image source


function App()
{
  return (
    <div className="bg-neutral-800 min-h-screen flex items-center justify-center">
      <div className="flex items-center text-[#00df9a]">
        <img src={logo} alt="Logo" className="" /> {/* Use SVG as an image source */}
        <div className="text-4xl ml-[-70px]">Power Kick Soccer</div>
      </div>
      <Navbar />
    </div>
  );
}

export default App;
