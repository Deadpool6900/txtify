import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Entry(props) {
    const up = () => {
        const UpperCase = text.toLocaleUpperCase()
        settext(UpperCase)
    }
    const low = () => {
        const low = text.toLocaleLowerCase()
        settext(low)
    }
    const clear = () => {
        settext("")
    }
    const copy = () => {
        var textField = document.createElement('textarea')
        textField.innerText = text;
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }
    const textchange = (event) => {
        settext(event.target.value);
    }

    const [text, settext] = useState("")
    return (
        <>
            <div className="container mt-5" style={props.mode}>
                <div className="mb-3" style={props.mode}>
                    <label htmlFor="exampleFormControlTextarea1" style={props.mode} className="form-label">Enter your text here</label>
                    <textarea style={props.mode} className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={textchange}></textarea>
                </div>

            </div>
            {/* //buttons  */}
            <div className="container" style={props.mode}>
                <button className={`btn ${props.Btn} me-5 mt-4`} onClick={low}>LowerCase</button>
                <button className={`btn ${props.Btn} me-5 mt-4`} onClick={up}>UpperCase</button>
                <button className={`btn ${props.Btn} me-5 mt-4`} onClick={copy}>copy</button>
                <button className={`btn ${props.Btn} me-5 mt-4`} onClick={clear}>clear</button>
                <h5 className="mt-5">Text summary</h5>
                <p>it has {text.length} characters and {text.split(" ").length - 1} words </p>
                {/* dropdown */}
                <div className="dropdown">
                    <button className={`btn ${props.Btn} dropdown-toggle`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Preview Text
                    </button>
                    <div className="dropdown-menu">
                        <p className="dropdown-item">{text}</p>
                    </div>
                </div>
            </div>


        </>
    )
}
