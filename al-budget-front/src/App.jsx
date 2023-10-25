import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import List from './pages/List'
import NavBar from './components/NavBar'
import NewTransation from './pages/NewTransaction'
import TransactionInfo from './pages/TransactionInfo'

function App() {

  return (
    <>
    <div className='App'>
      <Router>
    {/* <h2>Run it</h2> */}
    <NavBar/>

    {/* <TransactionCard /> */}
 <Routes>
 <Route path='/'  element={ <List />}/>
 <Route path='/add' element={<NewTransation />}/>
 <Route path='/details' element={<TransactionInfo />}/>
       
    
    
    </Routes>
    </Router>
    </div>
    </>
  )
}

export default App
