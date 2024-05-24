import { useEffect, useState, useContext } from 'react';
import logo from '../Logo.png'; // Path to the image
import {Link} from 'react-router-dom'
import useOnlineStatus from '../Routers/useStatusOnline';
import UserContext from '../Routers/UserContext';
import { useSelector } from 'react-redux';

const Heading = ()=>{
    const [btnName, setBtnName] = useState("Login")
    const {loggedInUser} = useContext(UserContext)
  
    // Subscribing to the store using Selector
    const cartItem = useSelector((store)=> store.cart.Items)
    // console.log(cartItem)

    const OnlineStatus = useOnlineStatus()
    return(
     <div className="flex justify-between bg-pink-200 shadow-lg">
         <div className="w-24 p-1">
             <img className="Logo" src={logo}/>
         </div>
         <div className='flex items-center'>
             <ul className='flex p-4 gap-5 items-center'>
                 <li>OnlineStatus: {OnlineStatus ? "💚" : "❤️"}</li>
                 <li><Link to={"/"}>Home</Link></li>
                 <li><Link to={"/About"}>About Us</Link></li>
                 <li><Link to={"/Contacts"}>Contact us</Link></li>
                 <li className='font-bold'><Link to={"/Cart"}>Card -({cartItem.length})</Link></li>
                 <li><Link to={"/Grocary"}>Grocary</Link></li>
                 <button className='Login' onClick={()=>{
                    btnName === 'Login' ? setBtnName('Log-out') : setBtnName('Login')
                    }}>{btnName}
                 </button>
                 <li className='p-4 font-bold'>{loggedInUser}</li>
             </ul>
         </div>
     </div>
    )
 }

 export default Heading