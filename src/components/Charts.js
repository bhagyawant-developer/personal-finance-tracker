import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement);

function Charts({ transactions }) {
  const income = transactions
    .filter(transaction => transaction.type === 'Income')
    .reduce((total, transaction) => total + transaction.amount, 0);

  const expenses = transactions
    .filter(transaction => transaction.type === 'Expense')
    .reduce((total, transaction) => total + transaction.amount, 0);

  const data = {
    labels: ['Income', 'Expenses'],
    datasets: [
      {
        label: 'Amount',
        data: [income, expenses],
        backgroundColor: ['#4caf50', '#f44336'],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return '$' + value;
          }
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <h2>Financial Overview</h2>
      <Bar data={data} options={options} />
    </div>
  );
}

export default Charts;
