import "../styles/TransactionList.css";
import { useEffect, useState } from "react";
import TransactionCard from "./TransactionCard";
import { Link } from "react-router-dom";

const TransactionList = () => {
  const API = import.meta.env.VITE_REACT_VAR_URL;
  console.log(`${API}/transactions`);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch(`${API}/transactions`)
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        // await response as var then set state to be
        const transactions = await res.json();

        setTransactions(transactions);
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  const renderTable = () => {
    if (!transactions.length) {
      return <p>Loading...</p>;
    }

    return (
      <>
        <div className="transaction-list">
          <div className="transaction-items-list">
            <h2> 🏠🏠🏠 Transaction List 🏠🏠🏠 </h2>

            <table>
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>From</th>
                </tr>
              </thead>
              <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.item_name}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.date}</td>
                
                <td> <Link to={`/transaction/${transaction.id}`}>{transaction.id} </Link> </td>
              </tr>
            ))}
          </tbody>
        </table>
          </div>
        </div>
      </>
    );
  };
  return renderTable();
};
export default TransactionList;

// {/* fetch */}
// {/* useContext?? */}
// {/* useStates */}

// headers: {
//   "Content-Type": "application/json",
//   "Access-Control-Allow-Origin": "*",
//   "Cache-Control": "max-age=3600"
// }
