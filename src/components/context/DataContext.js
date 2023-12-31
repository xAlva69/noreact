import { createContext, useState, useEffect } from "react";
import axios from "axios";
 

export const DataContext=createContext();

const DataProvider=({children})=>{
    const[data, setData]=useState([]);

    useEffect(()=>{
        axios.get("data.json").then((res)=> setData(res.data))
        
    },[])
    
    return <DataContext.Provider value={data}>
        {children}
        </DataContext.Provider>;
    //     axios.get("data.json").then((res)=> setData(res.data))
    // return <dataContext.Provider value={{data}}>{children}</dataContext.Provider>;
};
export default DataProvider;