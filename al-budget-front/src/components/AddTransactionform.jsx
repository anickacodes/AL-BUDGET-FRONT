import { useEffect, useState } from "react";
import "../styles/AddTransactionForm.css";

const AddTransactionForm = () => {
  const [transaction, setTransaction] = useState({
    date: "",
    item_name: "",
    amount: "",
  });
  const [flag, setFlag] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setFlag(true);
    console.log("hi", transaction.date, transaction.item_name, transaction.amount);
  }

  function handleChange(event) {
    const {name, value} = event.target;
    setTransaction((prev) => ({ ...prev, [name]: value }));
  }

  useEffect(() => {
    if (flag) {
      fetch("http://localhost:3333/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transaction),
      });
    }
    // check for & handle errors
    setTransaction(transaction)
    setFlag(false)
  }, [flag]);

  return (
    <>
      <div className=".add-transaction-container">
        <h2 className="add-transaction-title"> Add Transactions</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" placeholder="Date">
              {" "}
              Date:{" "}
            </label>
            <input
              name={"date"}
              value={transaction.name}
              onChange={handleChange}
              type="date"
            ></input>
          </div>
          <div className="form-group">
            <label className="form-label" placeholder="Category">
              Category:{" "}
            </label>
            <input type="text"></input>
          </div>
          <div className="form-group">
            <label className="form-label" placeholder="Amount">
              {" "}
              Amount:{" "}
            </label>
            <input type="text"></input>
          </div>
          <button type="Submit" className="submit-button">
            {" "}
            Submit{" "}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTransactionForm;
