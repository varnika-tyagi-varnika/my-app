import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
   // console.log("Uppercase was clicked : " + text);
    let newText = text.toUpperCase();
    setText(newText);
     props.showAlert("converted to uppercase!", "success");
  }
   const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase!", "success");
  }

  const handleClearClick = ()=>{
    setText((" "));
    props.showAlert("Text cleared!", "success");
  }

  const handleReClick = ()=>{
    let newText = text.split(" ").reverse().join(" ");
    setText(newText);
    props.showAlert("Text Reversed!", "success");
  }

  const handleOnChange = (event)=>{
    //console.log("On change");
    setText(event.target.value);
  }

  const handleCopy = ()=> {
    console.log("I am copy");
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copy to clipboard!", "success");

  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces!", "success");

  }

 const [text, setText] = useState('Enter text here');
 //text = "new text"; // wrong way to change the state
 //setText("new text"); //correct way to change the state

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#132b31'}}>
          <h1 className='mb-4' style={{
          fontSize: '32px',
          whiteSpace: 'nowrap'
        }}>
          {props.heading}
        </h1>
    <div className="mb-3">

        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#153b43':'white',
        color: props.mode==='dark'?'white':'#154e53'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2  my-1" onClick={handleUpClick}>convert to upper case</button>
         <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>convert to lower case</button>
         <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>clear Text</button>
         <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleReClick}>reverse Text</button>
         <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>copy Text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

        </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'#132b31'}}>
         <h1>Your text summary</h1>
         <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words,{text.length} characters</p>
         <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
         <h2>preview</h2>
         <p>{text.length>0?text:"Nothing to preview"}</p>
         </div>
    </>
  )
}
