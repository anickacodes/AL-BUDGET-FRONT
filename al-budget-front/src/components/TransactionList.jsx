import "../styles/TransactionList.css";
import { useEffect, useState } from "react";

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
        <h2> Our Add Transactions Details </h2>

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
            {transactions.map((transactions) => (
              <tr key={transactions.id}>
                <td>{transactions.item_name}</td>
                <td>{transactions.from}</td>
                <td>{transactions.date}</td>
                <td>${transactions.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
