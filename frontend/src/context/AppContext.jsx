import { createContext } from "react";
import { doctors } from "../assets/assets";

// Create the AppContext using createContext
export const AppContext = createContext();

const AppContextProvider = (props) => {

    const value = {
        doctors
    };

    return (
        // Use AppContext.Provider instead of AppContextProvider
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
