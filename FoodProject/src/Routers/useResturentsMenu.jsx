import { useEffect, useState } from "react";
import { Menu_API } from "./Constant";

const useResturentsMenu = (resID)=>{
    const [resInfo, setResInfo ] = useState([])
    //fetchdata
    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu = async()=>{
        const data = await fetch(Menu_API + resID)
        const json = await data.json()
        setResInfo(json)
    }

    return resInfo;
}
export default useResturentsMenu