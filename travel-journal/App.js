import React from "react"
import Navbar from "./components/Navbar"
import Cards from "./components/Cards"
import data from "./data.js"

export default function App(){
    const cards= data.map(item=>{
        return (
            <Cards {...item} />
        )
    })
        // <Cards />
    return(
        <div>
            <Navbar />
            <div className="cards--list">
                 {cards}
            </div>
       </div>
    )
}