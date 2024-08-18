import React, { useState } from 'react';

function AddTransaction({ onAddTransaction }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('Income');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTransaction({ description, amount: parseFloat(amount), type });
    setDescription('');
    setAmount('');
  };

  return (
    <div>
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="e.g., Grocery Shopping"
          required
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="e.g., 50"
          required
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
