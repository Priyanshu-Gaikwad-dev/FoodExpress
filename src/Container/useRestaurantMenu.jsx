import { useEffect, useState } from "react";
import { MENU_URL } from "../Links/Contants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null); // Initialize as null instead of empty array

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${MENU_URL}${resId}`);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const json = await response.json();
                setResInfo(json.data);
            } catch (error) {
                console.error("Failed to fetch restaurant menu:", error);
                setResInfo(null); // Set to null on error
            }
        };

        if (resId) { // Only fetch if resId exists
            fetchData();
        }
    }, [resId]); // Add resId to dependency array

    return resInfo;
};

export default useRestaurantMenu;