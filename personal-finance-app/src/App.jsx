import React from "react";
import { BudgetDashboard } from "./components/BudgetDashboard";

export default function App() {
  return (
    <main className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">Personal Finance Manager</h1>
      <BudgetDashboard />
    </main>
  );
}
