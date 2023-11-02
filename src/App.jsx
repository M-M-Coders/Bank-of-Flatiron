import React, { useState, useEffect } from 'react';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import './Bank.css'
import './App.css';

function App() {
 const [fetchedData, setFetchedData] = useState([]);
 const [search, setSearch] = useState('');

 useEffect(() => {
    fetch(' http://localhost:3000/transactions')
      .then((response) => response.json())
      .then((data) => setFetchedData(data));
 }, []); // Empty dependency array ensures the effect runs once after the initial render

 const addTransaction = (newTransaction) => {
    // Update the local state to include the new transaction
    setFetchedData([...fetchedData, newTransaction]);
 };

 const handleDelete = (id) => {
   // Send a request to delete the transaction with the given id
   fetch(`http://localhost:3000/transactions/${id}`, {
     method: "DELETE",
   })
     .then((response) => response.json())
     .then(() => {
       // Remove the deleted transaction from the fetchedData state
       setFetchedData((transactions) =>
         transactions.filter((transaction) => transaction.id !== id)
       );
     })
     .catch((error) => {
       console.error("Error deleting transaction:", error);
       // Handle any error if necessary
     });
 };

 const handleSort = (sortingKey) => {
  let sortedTransactions = [...fetchedData];

  sortedTransactions.sort((a, b) => {
    const valueA = a[sortingKey].toLowerCase();n
    const valueB = b[sortingKey].toLowerCase();
    return valueA.localeCompare(valueB);
  });

  setFetchedData(sortedTransactions);
};


 return (
    <div className="app-container">
      <h1 className="app-title">Bank of Flatiron</h1>
      <img src="https://static.vecteezy.com/system/resources/previews/020/716/209/original/flat-icon-bank-bank-icon-where-to-keep-money-illustration-of-saving-in-the-bank-free-png.png" alt="bank icon" className="bank-icon" />
      <TransactionForm onAddTransaction={addTransaction} />
      <TransactionTable transactions={fetchedData} handleDelete={handleDelete} handleSort={handleSort} />
    </div>
 );
}

export default App;