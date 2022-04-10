import React, { useState } from 'react'

function Utility(props) {
    const [text, updateText] = useState("");

    const convertToUpperCase = () => {
        let upperCaseText = text.toUpperCase();
        updateText(upperCaseText);
        props.configAlert("Text Coverted To UpperCase","success");
    }
    const convertToLowerCase = () => {
        let lowerCaseText = text.toLowerCase();
        updateText(lowerCaseText);
        props.configAlert("Text Coverted To LowerCase","success");
    }
    const clearText = () => {
        updateText("");
        props.configAlert("Text Cleared","success");
    }
    const updateTextValue = (event) => {
        updateText(event.target.value);
    }
    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
        props.configAlert("Text Copied To Clipboard","success");
    }
    const removeExtraspaces = () => {
        let formatedText = text.split(/[ ]+/);
        updateText(formatedText.join(" "));
        props.configAlert("Removed Extra Spaces From The Text","success");
    }

    return (
        <>
            <div className="container my-5">
                <div className="mb-3">
                    <h4 className={`text-${(props.mode === "light")?("dark"):("light")}`}>{props.title}</h4>
                    <textarea className={`form-control bg-${(props.mode === "light")?("light"):("warning")}`} id="text-box" rows="10" onChange={updateTextValue} value={text}></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" disabled={text.length === 0} onClick={convertToUpperCase}>Convert To UpperCase</button>
                <button className="btn btn-primary mx-2 my-2" disabled={text.length === 0} onClick={convertToLowerCase}>Convert To LowerCase</button>
                <button className="btn btn-primary mx-2 my-2" disabled={text.length === 0} onClick={copyToClipboard}>Copy To Clipboard</button>
                <button className="btn btn-primary mx-2 my-2" disabled={text.length === 0} onClick={removeExtraspaces}>Remove Extra Spaces</button>
                <button className="btn btn-danger mx-2 my-2" disabled={text.length === 0} onClick={clearText}>Clear Text</button>
            </div>
            <div className="container my-5" style={{color: (props.mode === "light")?("Black"):("White") }}>
                <h5>Your Text Details : </h5>
                <p><span>{(text.split(/\s+/).filter((element) => {return element.length !== 0}).length)} Words</span> And <span>{text.length} Characters</span></p>
                <p>{(text.split(/\s+/).filter((element) => {return element.length !== 0}).length) * 0.008} - Time Required To Read (Minutes)</p>
                <h5>Preview : </h5>
                <p>{(text.length > 0)?(text):("Noting To Preview Here !")}</p>
            </div>
        </>
    )
}

export default Utility