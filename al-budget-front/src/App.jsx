import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import AddInfo from './pages/AddInfo'
import Details from './pages/Details'
import List from './pages/List'
import NavBar from './components/NavBar'

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
 <Route path='/add' element={<AddInfo />}/>
 <Route path='/details' element={<Details />}/>
       
    
    
    </Routes>
    </Router>
    </div>
    </>
  )
}

export default App
