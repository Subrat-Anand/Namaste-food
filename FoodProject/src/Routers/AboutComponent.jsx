import React, { useEffect, useState } from "react";

const AboutComponent = ({ name }) => {
    const [Api, setAPI] = useState([]);
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);

    useEffect(() => {
        fetchCall();
    }, []);

    const fetchCall = async () => {
        const username = "akshaymarch7";
        const data = await fetch(`https://api.github.com/users/${username}`);
        const json = await data.json();
        setAPI(json);
        console.log(json);
    };

    if(Api.length === 0){
        return (
            <>
                <div className="h-[200px] bg-gray-500 w-[200px]"></div>
            </>
        )
    }
    

    return (
        <div className="user-card">
            <h1 onClick={() => {setCount(count + 1)}}>Count: {count}</h1>
            <h2 onClick={() => {setCount2(count2 + 1)}}>Count: {count2}</h2>
            <img src={Api.avatar_url} className="w-[200px]"/>
            <h2>Name: {Api.name}</h2>
            <h3>Location: {Api.location}</h3> {/* Example of rendering API data */}
            <h4>followers: {Api.followers}</h4> {/* Example of rendering API data */}
        </div>
    );
};

export default AboutComponent;
