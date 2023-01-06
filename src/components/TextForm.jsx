import { useState } from "react";

export default function TextForm({ heading , mode, showAlert}) {
  const [text, setText] = useState("");

  const toUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    // setText("You have clicked on handleUpClick");
 
    showAlert("Converted to upperCase","success");
  };
  const toLowerCase = () => {
    setText("You have clicked on handleUpClick");
    let newText = text.toLowerCase();
    setText(newText);

    showAlert("Converted to lowerCase", "success");

  };
  const clearText = () => {
    setText("");
    showAlert("Text Cleared", "success");

  };
  const handleOnChange = (e) => {
    // e.target.value = ""
    setText(e.target.value);
  };

  const handleCopy = () =>{
    console.log("Copy successfull!");
    let text  = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);

    showAlert("Text Copied", "success");

  }

  return (
    <>
      <div
        className={`container  my-3 text-${
          mode === "light" ? "dark" : "light"
        }`}
      >
        <h1>{heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
  
            style = {{backgroundColor: mode === 'dark'?'black':'white', color: mode === 'dark'?'white':'black'}}



          ></textarea>
        </div>
        <div className="p-2 ">
          <button className="btn btn-primary mx-2" onClick={toUpperCase}>
            Convert to UpperCase
          </button>
          <button className="btn btn-primary mx-2" onClick={toLowerCase}>
            Convert to LowerCase
          </button>
          <button className="btn btn-primary mx-2" onClick={clearText}>
            ClearText
          </button>
          <button className="btn btn-primary mx-2" onClick={handleCopy}>
            CopyText
          </button>
        </div>
      </div>

      <div
        className={`container  my-3 text-${
          mode === "light" ? "dark" : "light"
        }`}
      >
        <h2>Your text Summary</h2>
        <p>
          <b>
            {" "}
            {text.split(" ").length} word and {text.length} characters
          </b>{" "}
        </p>
        <p>
          {" "}
          <b>{0.008 * text.split(" ").length} Minutes read </b>
        </p>
        <h2>Preview</h2>
        <p>{text!==""?text:"Enter something in the textbox above to preview here!"}</p>
      </div>
    </>
  );
}
