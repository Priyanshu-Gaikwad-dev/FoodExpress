import { createContext  , useState} from "react";


const UserContext = createContext({
    loggedInUser : "Default User",
});

const UserProvider = ( {children} ) => {

    const [ loggedInUser , setLoggedInUser] = useState("");

    return(
    <UserContext.Provider value={{ loggedInUser , setLoggedInUser }}>
        {children}
    </UserContext.Provider>
    );
}

export { UserContext, UserProvider };