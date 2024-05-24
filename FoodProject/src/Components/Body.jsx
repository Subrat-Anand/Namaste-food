import React, { useEffect, useState } from 'react';
import RestroCard, {WithPromotedLable} from "./RestroCard";
import restaurantData from "./RestruntData";
import useOnlineStatus from '../Routers/useStatusOnline';

const Body = () => {
    const [restaurants, setRestaurants] = useState(restaurantData); // useState hook ka istemal kiya gaya
    const [SearchText, setSearchText] = useState('')
    const RestaurantCardPromoted = WithPromotedLable(RestroCard)
    // useEffect(() => {
    //     fetchData();
    // }, []);
    
    // async function fetchData() {
    //     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    //     const json = await data.json();
    //     console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants); // Yeh ab JSON data hoga
    //     // Ab aap JavaScript object ko further process kar sakte hain according to your requirement

    //     setRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    //     // console.log(setRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants))
    //     // console.log(setRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants))
    // }
        
    // if(restaurants.length === 0){
    //     return <h1>Loading</h1>
    // }

    // const URL = fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    // const json = URL.json()
    // console.log(json)

    const filterTopRatedRestaurants = () => {
        const filteredData = restaurants.filter(res => res.stars > 4);
        setRestaurants(filteredData);
    };

    const online = useOnlineStatus()
    if(online === false) return <h1>ohh you are offline</h1>

    return (
        <div className='Body'>
            <div className='filter flex'>
            <div className='m-4 p-4'>
                <input 
                    type='text' 
                    className='border border-solid border-black' 
                    value={SearchText} 
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button className='px-2 py-1 bg-green-100 rounded-lg ml-4'
                    onClick={() => {
                    const searchTextLower = SearchText.toLowerCase(); // Convert search text to lowercase
                    const filterRestaurants = restaurantData.filter(res => res.resname.toLowerCase().includes(searchTextLower));
                    setRestaurants(filterRestaurants);
                    }}
                >
                Search
                </button>
            </div>
                <div className='flex items-center'>
                    <button className="px-2 py-1 bg-blue-200 rounded-lg"
                        onClick={filterTopRatedRestaurants}
                        >Top Rated Restaurants
                    </button> {/* Button ka text change kiya gaya */}
                </div>
            </div>
            <div className='px-[5rem]'>
                <div className='flex flex-wrap items-center'>
                        {restaurants.map((data, key) => (
                        // Check if a restaurant is Promoted and add a label to it
                        data.Promoted ? (
                        <RestaurantCardPromoted data={data} key={key}/>
                    ) : (
                        <RestroCard data={data} key={key}></RestroCard>
                    )
                    ))}

                </div>
            </div>
        </div>
    );
};


export default Body;
