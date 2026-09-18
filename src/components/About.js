import React, {useState } from 'react'

export default function About(props) {

   // const[mystyle, setMyStyle] = useState({
   // //    color: 'black',
   //     background: 'white'
   //})
   let mystyle = {
    color: props.mode ==='dark'?'white':'#082733',
   backgroundColor: props.mode === 'dark' ? 'rgb(16, 71, 93)' : 'white',
   
   }
    
 return (
    <div className="container" >
        <h1 className="my-2" style={{color: props.mode ==='dark'?'white':'#082733'}}>About Us</h1>
      <div className="accordion" id="accordionExample" style={mystyle}>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze your text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
               Textify gives you a simple and easy way to analyze your text quickly and
                efficiently. It helps you count words and characters and also provides
                estimated reading time for the given text.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body"style={mystyle}>
                Textify is a free text analysis tool that provides instant word count,
                character count and reading time statistics for a given text. It is useful
                for students, writers and anyone who wants to analyze their text easily.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               <strong>Browser compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                This text analysis software works on modern web browsers such as Chrome,
                Firefox, Safari, Edge and Opera. It can be used to analyze and edit text
                easily on different devices.
            </div>
            </div>
        </div>
        </div>
   </div>
  )
}
