import React, { useState, useEffect } from 'react';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import './Bank.css'
import './App.css';

function App() {
 const [fetchedData, setFetchedData] = useState([]);
 const [search, setSearch] = useState('');

 useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then((response) => response.json())
      .then((data) => setFetchedData(data));
 }, []); // Empty dependency array ensures the effect runs once after the initial render

 const addTransaction = (newTransaction) => {
    // Update the local state to include the new transaction
    setFetchedData([...fetchedData, newTransaction]);
 };

 return (
    <div className="app-container">
      <h1 className="app-title">Bank of Flatiron</h1>
      <img src="https://static.vecteezy.com/system/resources/previews/020/716/209/original/flat-icon-bank-bank-icon-where-to-keep-money-illustration-of-saving-in-the-bank-free-png.png" alt="bank icon" className="bank-icon" />
      <TransactionForm onAddTransaction={addTransaction} />
      <TransactionTable transactions={fetchedData} />
    </div>
 );
}

export default App;