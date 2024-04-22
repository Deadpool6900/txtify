import React, { useState } from 'react'
import Navbar from '../components/Navbar'
export default function About() {
    const Dark = {
        color: "white",
        backgroundColor: "#212121"
    }
    const light = {
        color: "#212121",
        backgroundColor: "white"
    }

    const toggleTheme = () => {
        if (Theme.color === "white") {
            setMyStyle(light)
            setBtn("btn-dark")
            document.body.style.backgroundColor = "white";

        }
        else {
            setMyStyle(Dark);
            setBtn("btn-light")
            document.body.style.backgroundColor = "#212121";
        }
    }
    const [Theme, setMyStyle] = useState(light)
    const [Btn, setBtn] = useState("btn-dark")
    return (
        <div>
            <Navbar/>
        <h1>About</h1>
        <div className="container">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nemo id accusantium. Voluptas consequatur itaque illo ab, nesciunt quod saepe.
        </div>
        </div>
    )
}
