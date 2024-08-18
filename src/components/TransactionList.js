import React from 'react';

function TransactionList({ transactions }) {
  return (
    <div className="transaction-list">
      <h2>Transaction List</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.description}: {transaction.type === 'Income' ? '+' : '-'}${transaction.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
