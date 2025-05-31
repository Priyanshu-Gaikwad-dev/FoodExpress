import { useEffect, useState } from "react";

const useContainer = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [allData, setAllData] = useState([]);
    const [newFData, setnewFData] = useState([]);
    
    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1402837&lng=79.09594299999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const json = await response.json();
            const restaurants = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            
            setFilteredData(restaurants);
            setAllData(restaurants);
            setnewFData(restaurants);
            
        } catch (error) {
            console.error("Error fetching data:", error);
            // Optionally set error state here if needed
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { 
        filteredData, 
        setFilteredData, 
        allData, 
        setAllData, 
        newFData, 
        setnewFData 
    };
};

export default useContainer;