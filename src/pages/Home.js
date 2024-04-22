import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import Entry from '../components/Entry'

export default function Home() {
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
            <Navbar mode={Theme} action={toggleTheme} />
            <Entry mode={Theme} Btn={Btn} />
        </div>
    )
}
