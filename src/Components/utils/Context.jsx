import React from 'react'
import { createContext, useContext, useState, useEffect, useReducer } from "react"

const GlobalStates = createContext()

const initialFavState = JSON.parse(localStorage.getItem('favs')) || []
const favReducer = (state, action) => {
    switch(action.type){
        case 'ADD_FAV':
            return [...state, action.payload]
        default:
            throw new Error
    }
}


const Context = ({children}) => {
    const [dentistas, setDentistas] = useState([])
    const [theme, setTheme]= useState(false)
    const [favState, favDispatch] = useReducer(favReducer, initialFavState)

    const url = `https://jsonplaceholder.typicode.com/users`
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setDentistas(data))
    }, [])

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(favState))
    }, [favState])



return (
    <GlobalStates.Provider value = {{dentistas, favState, favDispatch,theme,setTheme}}>
        {children}
    </GlobalStates.Provider>
)
}

export default Context

export const useGlobalStates = () =>{
    return useContext(GlobalStates);
}