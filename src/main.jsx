// main.jsx
import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Ensure the correct path
import App from './App.jsx';


const Main = () => {
  const [cashInAmount, setCashInAmount] = useState(0);
  const [cashOutAmount, setCashOutAmount] = useState(0);
  const [balance, setBalance] = useState(0);

  const updateAmounts = (cashIn, cashOut) => {
    setCashInAmount((prev) => prev + cashIn);
    setCashOutAmount((prev) => prev + cashOut);
    setBalance((prev) => prev + cashIn - cashOut);
  };

  return (
    <>
      <App onUpdate={updateAmounts} />
    </>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>,
);