import { createContext, useContext, useState } from "react";

// Create Context
const UserContext = createContext();

// Custom Hook for using Context
export const useUserContext = () => useContext(UserContext);

// Provider Component
export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({});

    // Function to update individual section data
    const updateSection = (section, data) => {
        setUserData((prevData) => ({
            ...prevData,
            [section]: { ...prevData[section], ...data }
        }));
    };

    return (
        <UserContext.Provider value={{ userData, updateSection }}>
            {children}
        </UserContext.Provider>
    );
};
