import { useEffect, useState } from "react";
import "../styles/TransactionDetails.css";

const TransactionDetails = () => {
  const API = import.meta.env.VITE_REACT_VAR_URL;
  console.log(`${API}/transactions`);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${API}/transactions`)
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        // Parse the response data into JSON
        const transactions = await res.json();

        // Set the parsed JSON data in the component state
        setData(transactions);
      })
      .catch((err) => console.log("Error:", err));
  }, []);

  // Check if the data variable is initialized before calling the map() function
  if (data) {
    return (

      <table>
        <thead>
 <h2> Our Add Transactions Details </h2> 

          <tr>
            <th>Item Name</th>
            <th>Amount</th>
            <th>Date</th>
            <th>From</th>
          </tr>
        </thead>
        <tbody>

          {data.map((data) => (
            <tr key={data.id}>
              <td>{data.item_name}</td>
              <td>${data.amount}</td>
              <td>{data.date}</td>
              <td>{data.from}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else {
    // Return a loading indicator or something similar
    return <p>Loading...</p>;
  }
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