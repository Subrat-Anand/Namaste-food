import { useEffect, useState } from "react"
import Heading from "../Components/Header"
import { useParams } from "react-router-dom"
import { Menu_API } from "./Constant"
import useRestruentsMenu from "./useResturentsMenu"
import RestaurantCatogary from "../Components/ResCatogary"

const ResturentsMenu=()=>{
    // const [resInfo, setResInfo] = useState([])
    const [showIndex, setShowIndex] = useState(0)
    const {resID} = useParams()
    const resInfo = useRestruentsMenu(resID)
    // console.log(resID)

    // useEffect(()=>{
    //     fetchMenu()
    // },[])

    // const fetchMenu = async () => {
    //     const data = await fetch(Menu_API + resID)
    //     const json = await data.json()
    //     console.log(json)
    //     setResInfo(json)
    // }
    if(resInfo.length === 0){
            return <h1>Loading</h1>
        }

        const {name, cuisines, costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info
        const {itemCards} = resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

        const Cetogary = resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
            return c.card?.["card"]?.["@type"] ===
             "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
        });
        
    return (
        <div className="text-center"> 
            <Heading/>
            <h1 className=" font-bold my-10 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
             {/* Restaurant Accordions */}
             {Cetogary.map((category, index) => (
            <RestaurantCatogary 
                data={category?.card?.card}
                key={category?.card?.card?.title} // Closing bracket added here
                showItem={index === showIndex && true} // showIndex ka kahin bhi define nahi kiya gaya hai
                setShowIndex={()=> setShowIndex(index)}
            />
            ))}
        </div>
    )
}
export default ResturentsMenu