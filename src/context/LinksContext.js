import {createContext, useState} from 'react'

const LinksContext = createContext();

export const LinksProvider = ({children})=>{
    const [links, setLinks] = useState([]);
    

    const values = {
        links,
        setLinks
    };

    return(
        <LinksContext.Provider value={values}>{children}</LinksContext.Provider>
    )
    
}

 




export default LinksContext;