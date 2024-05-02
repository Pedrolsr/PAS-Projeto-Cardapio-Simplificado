import React, { createContext, useState } from "react";

export const TemaContext = createContext();

export const TemaProvider = ({ children }) => {
    const [tema, setTema] = useState("claro");
    
    const alterarTema = () => {
        setTema(tema === "claro" ? "escuro" : "claro");
    };

    return (
        <TemaContext.Provider value={{ tema, alterarTema }}>
            {children}
        </TemaContext.Provider>
    );
}