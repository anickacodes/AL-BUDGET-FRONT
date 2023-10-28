import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import List from "./pages/Index";
import NavBar from "./components/NavBar";
import NewTransaction from "./pages/New";
import TransactionInfo from "./pages/Show";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/new" element={<NewTransaction />} />
            <Route path="/show/:id" element={<TransactionInfo />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
