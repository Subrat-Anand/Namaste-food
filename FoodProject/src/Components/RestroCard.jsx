import { useContext } from "react";
import UserContext from "../Routers/UserContext";

const RestroCard = (props) => {
    const { data } = props;
    const {loggedInUser} = useContext(UserContext)
    const { resname, cuising, stars, Duration, image, areaName } = data; // Data ko props se extract karo
    return (
        <div className='bg-gray-200 m-4 p-4 w-[230px] rounded-lg hover:bg-gray-300'>      
            <img src={image} className='rounded-lg'/> {/* Yahan ek image source missing hai */}
            <h3 className="font-bold py-4 text-xl">{resname}</h3>
            <h4>{cuising}</h4>
            <h4>{stars} Stars</h4>
            <h4>{Duration}</h4>
            <h4>{areaName}</h4>
            <h4>{loggedInUser}</h4>
        </div>
    );
};


    // Higher Order Component

    // Input - RestroCard => ReasroCardPromoted 

export const WithPromotedLable = ()=>{
    return(props)=>{
        return(
            <div>
                <label className="absolute bg-black font-bold text-white p-[5px] m-2 rounded-lg">Promated</label>
                <RestroCard {...props}/>
            </div>
        )
    }
}

export default RestroCard