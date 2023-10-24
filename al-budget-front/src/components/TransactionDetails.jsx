import { useState } from "react";
import "../styles/TransactionDetails.css";

const TransactionDetails = () => {
  const API = import.meta.env.VITE_REACT_VAR_URL;
  console.log(API)
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`${API}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((res) => setData(res))
      .catch((err) => console.log("Error:", err));
  }, []);

  return (
    <>
      <h2> Our Add Transactions Details </h2>
      {/* fetch */}
      {/* useContext?? */}
      {/* useStates */}
  
    </>
  );
};

export default TransactionDetails;
