import React, { useState } from 'react';
import './Form.css'

function TransactionForm({ onAddTransaction }) {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields (add more validation as needed)
    if (!description || !category || !amount) {
      alert('All fields are required.');
      return;
    }

    // Create a new transaction object
    const newTransaction = {
      id: Date.now(),
      description,
      category,
      amount: parseFloat(amount),
      date: new Date().toISOString(),
    };

    // Call the parent component's function to handle the new transaction
    onAddTransaction(newTransaction);

    // Clear form fields after submission
    setDescription('');
    setCategory('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Category:
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
