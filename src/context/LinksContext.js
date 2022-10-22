import { createContext, useState, useEffect } from 'react'

const LinksContext = createContext();

export const LinksProvider = ({ children }) => {
    const [links, setLinks] = useState(JSON.parse(localStorage.getItem("data") || "[]"));

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(links))
    }, [links])

    const values = {
        links,
        setLinks,
    };
    return (
        <LinksContext.Provider value={values}>{children}</LinksContext.Provider>
    )
}
export default LinksContext;