import React, { useState } from 'react';

function BudgetTracker({ onSetBudget }) {
  const [category, setCategory] = useState('');
  const [budgetAmount, setBudgetAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSetBudget({ category, budgetAmount: parseFloat(budgetAmount) });
    setCategory('');
    setBudgetAmount('');
  };

  return (
    <div>
      <h2>Set Budget</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="e.g., Food"
          required
        />
        <input
          type="number"
          value={budgetAmount}
          onChange={(e) => setBudgetAmount(e.target.value)}
          placeholder="e.g., 200"
          required
        />
        <button type="submit">Set Budget</button>
      </form>
    </div>
  );
}

export default BudgetTracker;
