import React, { useState } from 'react';
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';
import BudgetTracker from './components/BudgetTracker';
import Charts from './components/Charts';
import './styles.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [budgets, setBudgets] = useState([]);

  const handleAddTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const handleSetBudget = (budget) => {
    setBudgets([...budgets, budget]);
  };

  return (
    <div className="container">
      <h2>Expense Tracker</h2>
      <AddTransaction onAddTransaction={handleAddTransaction} />
      <TransactionList transactions={transactions} />
      <BudgetTracker onSetBudget={handleSetBudget} />
      <Charts transactions={transactions} />
    </div>
  );
}

export default App;
