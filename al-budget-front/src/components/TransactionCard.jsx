import '../styles/TransactionCard.css'
import {Link} from "react-router-dom";



const TransactionCard = ( {id ,date, item_name, amount}) => {  


    return (
        <div className="transaction-card"> 
            <div className="transaction-info"> 
                <div className="transaction-date"> {date}  </div>
                {<Link to='info/:id' className="transaction-category"> {item_name} </Link> }
                <div className="transaction-amount"> ${amount} </div>     
            </div>
        </div>
        
    )
}

export default TransactionCard