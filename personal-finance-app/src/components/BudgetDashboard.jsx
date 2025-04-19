import React from 'react';

export function BudgetDashboard() {
  const income = 5000;
  const expenses = 3200;
  const balance = income - expenses;

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Your Budget Overview</h2>
      <div className="mb-2">
        <p className="text-green-500 font-semibold">Income: ₹{income}</p>
      </div>
      <div className="mb-2">
        <p className="text-red-500 font-semibold">Expenses: ₹{expenses}</p>
      </div>
      <div>
        <p className="text-blue-500 font-bold">Balance: ₹{balance}</p>
      </div>
      {/* You would add more detailed budget information and interactive elements here */}
    </div>
  );
}

export default BudgetDashboard;