import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import List from "./pages/List";
import NavBar from "./components/NavBar";
import NewTransaction from "./pages/NewTransaction";
import TransactionInfo from "./pages/TransactionInfo";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/add" element={<NewTransaction />} />
            <Route path="/info/:id" element={<TransactionInfo />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
