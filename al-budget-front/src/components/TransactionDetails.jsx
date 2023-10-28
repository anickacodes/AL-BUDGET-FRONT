import { useEffect, useState } from "react";
import "../styles/TransactionDetails.css";
import { useParams, Link, useNavigate } from "react-router-dom";

const TransactionDetails = () => {
  const { id } = useParams();
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();
  const API = import.meta.env.VITE_REACT_VAR_URL;
  console.log(`${API}/transactions`);

  useEffect(() => {
    fetch(`${API}/transactions/${id}`)
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        return res.json();
      })
      .then(data => setTransactions(data))
      .catch((err) => console.error("Error:", err));
  }, [id]);

  const renderTable = () => {
    if (!transactions.length) {
      return <p>Loading...</p>;
    }

    const handleChange = (e) => {
      // e.preventDefault()
      const { name, value } = e.target;
      setTransactions((prev) => ({ ...prev, [name]: value }));
    };

    return (
      <>
        <div className="transaction-details">
          <h2> Our Transactions Details </h2>
          {/* <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Amount</th>
              <th>Date</th>
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
        </table> */}

          <div></div>

          <div>
            <label> Item-Name</label>
            <input
              type="text"
              name="item-name"
              value={transactions.item_name || ""}
              onChange={handleChange}
            />
          </div>

          <div></div>
        </div>
      </>
    );
  };
  return renderTable();
};
export default TransactionDetails;

// {/* fetch */}
// {/* useContext?? */}
// {/* useStates */}

// headers: {
//   "Content-Type": "application/json",
//   "Access-Control-Allow-Origin": "*",
//   "Cache-Control": "max-age=3600"
// }
