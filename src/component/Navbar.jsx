// Navbar.jsx
import React from 'react';

const Navbar = ({ cashInAmount, cashOutAmount, balance }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-around">
        <div className="text-center">
          <h2 className="text-white text-lg">Cash In</h2>
          <p className="text-green-400 text-xl">${cashInAmount.toFixed(2)}</p>
        </div>
        <div className="text-center">
          <h2 className="text-white text-lg">Cash Out</h2>
          <p className="text-red-400 text-xl">${cashOutAmount.toFixed(2)}</p>
        </div>
        <div className="text-center">
          <h2 className="text-white text-lg">Balance</h2>
          <p className="text-blue-400 text-xl">${balance.toFixed(2)}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;