import React from "react";
import StarAct from '../assets/red-stars.png'
import StarIna from '../assets/grey-stars.png'
import '../styles/Rating.css'

export default function Rating (props) {
    let Scale = [1,2,3,4,5]
    const rating = Number(props.rating)
    return (
        <div className="Rating">
            {Scale.map((Scal) =>
            rating >= Scal ? 
        <img className="stars" key={Scal} src={StarAct} alt="Rating star active"/> : 
        <img className="stars" key={Scal} src={StarIna} alt="Rating star inactive"/>
        )}
        </div>
    )
}