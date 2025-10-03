import React from "react";
import Prev from '../assets/prev.png'
import Next from '../assets/next.png'
import {useState} from "react";
import '../styles/Carousel.scss'

export default function Carousel(props) {
    const pictures = props.pictures
    const title = props.title
    console.log(pictures)
    let [i, setI] = useState(0)

    const previous = () => {
        setI((prevIndex) =>
          prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
      };
    
      const next = () => {
        setI((prevIndex) =>
          prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
      };

    return (
    
        <div className="carouselComponent">    
            <div className="carouselPicture" style={{transform:`translateX(-${i * 100}%)`}}>
           {pictures.map((picture, key) =>  <img className="img" key={key} src={picture} alt={title} /> )}
            </div>  
            
            {pictures.length > 1 && (
            <>
            <img src={Prev} className="arrowP" alt="Previous pictures" onClick={previous} />
            <img src={Next} className="arrowN" alt="Next pictures" onClick={next} />
            <p className="counter">{i + 1} / {pictures.length}</p> 
            </>
            )}
        </div>
    )
}