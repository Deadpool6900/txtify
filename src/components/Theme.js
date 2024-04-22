import React, { useState } from 'react'

export default function Theme() {

    const [theme,toggle] = useState({
        color: "black",
        backgroundColor : "white"
    })

    const toggle_theme =()=>{
        if(toggle.color == "black"){
            toggle({
                color: "white",
                backgroundColor : "black"
            })
        }
        else{
            toggle({
                color: "black",
                backgroundColor : "white"
            })
        }
    }
  return (
    <div>
      
    </div>
  )
}
