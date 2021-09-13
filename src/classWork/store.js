import React, { createContext, useState } from 'react';
import Information from './mock';
export const InfoContext = createContext();

export const Store = ({children}) => {
    const [data, setData] = useState(Information)
    return (
        <InfoContext.Provider
            value={[data, setData]}>
            {children}
        </InfoContext.Provider>
    );
};

export default Store;
