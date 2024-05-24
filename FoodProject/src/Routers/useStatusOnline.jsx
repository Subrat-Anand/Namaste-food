import { useEffect, useState } from "react"

const useOnlineStatus = ()=>{
    const [online, setOnline] = useState(true)
    useEffect(()=>{
        window.addEventListener("offline", ()=>{
            setOnline(false)
        })

        window.addEventListener("online", ()=>{
            setOnline(true)
        })
    })
    //boolean value
    return online
}
export default useOnlineStatus