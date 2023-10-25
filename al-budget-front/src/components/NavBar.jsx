import { Link } from 'react-router-dom'
import '../styles/NavBar.css'

const NavBar = () => {

    return (
        <>
        <div className="navbar">
        <div className="transaction-title">
            <p>This is our NavBar Component </p>
            <button className='navbar-button'>
                <Link className='navbar-new-transaction' to='/add'> ADD </Link>
            </button>
            </div>
            </div>
            </> 
    )
}

export default NavBar