// App.js
import React, { useState } from 'react';
import Navbar from './component/Navbar'

const App = () => {
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('cashIn');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [transactions, setTransactions] = useState([]);

  // State for cash in, cash out, and balance
  const [cashInAmount, setCashInAmount] = useState(0);
  const [cashOutAmount, setCashOutAmount] = useState(0);
  const [balance, setBalance] = useState(0);
















  

  const handleSubmit = (e) => {
    e.preventDefault();
    const transactionAmount = parseFloat(amount);
    const newTransaction = {
      type: transactionType === 'cashIn' ? 'Cash In' : 'Cash Out',
      category,
      description,
      amount: transactionAmount,
      date: new Date().toLocaleString(),
    };

    // Update cash in, cash out, and balance based on transaction type
    if (transactionType === 'cashIn') {
      setCashInAmount(cashInAmount + transactionAmount);
      setBalance(balance + transactionAmount);
    } else {
      setCashOutAmount(cashOutAmount + transactionAmount);
      setBalance(balance - transactionAmount);
    }

    setTransactions([...transactions, newTransaction]);
    // Reset form fields
    setAmount('');
    setTransactionType('cashIn');
    setCategory('');
    setDescription('');
  };

  const categories = {
    cashIn: ['Salary', 'Business', 'Loan', 'Rent', 'Investment'],
    cashOut: ['Groceries', 'Fuel', 'Food/Drink', 'Car/Bike', 'Clothes', 'Entertainment'],
  };

  return (
    <>
      <Navbar cashInAmount={cashInAmount} cashOutAmount={cashOutAmount} balance={balance} />
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Transaction Tracker</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label className="block text-lg mb-2">Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2">Transaction Type:</label>
          <select
            value={transactionType}
            onChange={(e) => {
              setTransactionType(e.target.value);
              setCategory(''); // Reset category when changing transaction type
            }}
            className="select select-bordered w-full"
            >
            <option value="cashIn">Cash In</option>
            <option value="cashOut">Cash Out</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2">Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select select-bordered w-full"
            required
            >
            <option value="">Select a category</option>
            {categories[transactionType].map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea textarea-bordered w-full"
            rows="3"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Transaction
        </button>
      </form>

      <h2 className="text-xl font-bold mb-4">Transaction History</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Type</th>
            <th>Category</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.type}</td>
              <td>{transaction.category}</td>
              <td>{transaction.description}</td>
              <td>${transaction.amount.toFixed(2)}</td>
              <td>{transaction.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          </>
  );
};

export default App;