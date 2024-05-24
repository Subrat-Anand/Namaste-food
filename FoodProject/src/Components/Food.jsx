import biryani from '../biryani.jpeg'; // Path to the image
import Heading from './Header';
import Body from './Body';
import UserContext from '../Routers/UserContext';
import { useEffect, useState } from 'react';
// import {createBrouserRouter, RouterProvider} from "react-router-dom"
// import About from './About';


const Appought = ()=>{
    const [userName, setUserName] = useState()
    useEffect(()=>{
        const data = {
            name: "subrat anand"
        }
        setUserName(data.name)
    })
    return(
        
        <>
                <UserContext.Provider value={{loggedInUser: "Elon Musk", setUserName}}>
                    <Heading/>
                        <UserContext.Provider value={{loggedInUser: userName}}>
                            <Body/>
                        </UserContext.Provider> 
                </UserContext.Provider>
        </>
       
    )
}

export default Appought