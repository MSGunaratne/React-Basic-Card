import React from "react"
import Info from "./Components/Info"
import Footer from "./Components/Footer"
import Interests from "./Components/Interests"
import About from "./Components/About"

export default function App() {
    return (
        <div className="App">
            <Info />
            <About />
            <Interests />
            <Footer />

        </div>
    )
}