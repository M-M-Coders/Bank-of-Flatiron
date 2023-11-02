import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import './Table.css';

function filterTransactions(transactions, search) {
  return transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(search.toLowerCase())
  );
}

function TransactionTable({ transactions, handleDelete, handleSort }) {
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [search, setSearch] = useState('');
  const [transaction, setFetchedData] = useState(transactions)

  useEffect(() => {
    setFilteredTransactions(transactions);
  }, [transactions]);

  useEffect(() => {
    setFilteredTransactions(filterTransactions(transactions, search));
  }, [search, transactions]);


  return (
    <div className='table-transaction'>
      <SearchBar search={search} setSearch={setSearch} />
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Date</th>
            <th>Description
            <button onClick={() => handleSort("description")}>Sort</button>
            </th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.id} className="transaction-row">
              <td>{transaction.id}</td>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              <td><button onClick={() => handleDelete(transaction.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
