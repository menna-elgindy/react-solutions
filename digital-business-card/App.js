import React from "react"
import Header from "./components/Header"
import Contacts from "./components/Contacts"
import Main from "./components/Main"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div className="container">
                <Header />
                <Contacts />
                <Main />
                <Footer />
        </div>
    )
}