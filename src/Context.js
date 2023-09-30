import React, { useState, createContext } from "react";

export const ConunterContext = createContext()

export const ConunterProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    const values = {
        count,
        suma() {
            setCount(val => val + 1)
        },
        resta() {
            setCount(val => val - 1)
        },
        user: {
            status: 'Online',
            jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJzdGF0dXMiOiJPbmxpbmUifQ.MIfj9pz-3nD-zLJnlg_myN3nCR7O7mTtUUaf-pVT3nI',
            theme: 'dark'
        }
    }
    return <ConunterContext.Provider value={values}>
        {children}
    </ConunterContext.Provider>
}