import { createContext, useEffect } from "react";
import { useState } from "react";
import axios from 'axios'

export const GameContext = createContext(null);





 
const GameContextProvider = (props) => {


    const url = 'http://localhost:4000';
    const [playerData,setPlayerData] = useState([])



    const fetchPlayerData = async () => {
        try {
        const response = await axios.get(`${url}/api/player`, {
        });
    
        console.log('User data fetched:', response.data);
        
        // Check if the response indicates success
        if (response.data.success) {
            setPlayerData({ ...response.data.user }); // Update state with user data
        } else {
            console.log("Failed to fetch player data.");
        }
    
        } catch (error) {
        console.error("Error fetching palyer data:", error);
        }
    };
    
    useEffect(()=>{
    
        fetchPlayerData()
        
    },[])





   const contextValue = {playerData}
    return (
        <GameContext.Provider value={contextValue}>
            {props.children}
        </GameContext.Provider>
    )
}

export default GameContextProvider;