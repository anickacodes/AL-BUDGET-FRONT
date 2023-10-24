
import './App.css'
import AddTransactionForm from './components/AddTransactionform'
import NavBar from './components/NavBar'
import TransactionCard from './components/TransactionCard'
import TransactionDetails from './components/TransactionDetails'
import TransactionList from './components/TransactionList'
import AddInfo from './pages/AddInfo'
import Details from './pages/Details'
import List from './pages/List'

function App() {

  return (
    <>
    <h2>Run it</h2>
    {/* <NavBar/> */}
    {/* <AddTransactionForm />
    <TransactionCard />
    <TransactionDetails/>
    <TransactionList /> */}
       <List />
    <Details />
    <AddInfo />
    </>
  )
}

export default App
