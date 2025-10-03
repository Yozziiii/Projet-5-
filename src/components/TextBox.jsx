import React from "react";
import {useState} from "react";
import  '../styles/TextBox.scss'
import Arrow from '../assets/arrow.png'

export default function TextBox ({title, content}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="parentSlide">

            <div className="slideC">
                <h3>{title}</h3>
                <img src={Arrow} alt="Arrow slide open or close"
                onClick={() => setIsOpen(!isOpen)}
                className={isOpen ? "arrow rotated" : "arrow"}/>
            </div>
            <div className={`text ${isOpen ? "open" : "closed"}`}>
                <div>
                {Array.isArray(content) ? (
                <ul>
                {content.map((item, index) => (
                        
                    <li key={index}>{item}</li>
                        
                    ))}
                </ul>
                )  : (

                <p>{content}</p>
               
               )}
                </div>
            </div>
        </div>

    )
}