import React from "react";
import { useParams } from "react-router";
import Logements from "../data/data.json"
import '../styles/FicheLogement.css'    
import Carousel from "../components/Carousel";
import TextBox from "../components/TextBox";
import Rating from "../components/Rating";
import Error from "./Error";

export default function FicheLogement(){
    const {id} = useParams()
    const logement = Logements.find(logement => logement.id === id)
    console.log(logement)
    if(!logement){
        return <Error/>
    }
    
    return (
    <main>
        <div className="carousel">
            <Carousel pictures={logement.pictures} title={logement.title}/>
        </div>
        <div className="info">
            <div className="titleLocTag">
                <p className="title">{logement.title}</p>
                <p className="location">{logement.location}</p>
                <ul>{logement.tags.map((tag, index) => (
                    <li key={index} className="tag">{tag}</li>
                ))}
                </ul>
            </div>
            <div className="hostAndRating">
                <div>
                    <p>{logement.host.name}</p>
                    <img src={logement.host.picture} alt="Hôte de la location"/>
                </div>
                <Rating rating={logement.rating}/>
            </div>
            <div className="parentDescription">
            <TextBox title="Description" content={logement.description} ></TextBox>
            <TextBox className="textBoxEquipement" title="équipement" content={logement.equipments} ></TextBox>
            </div>
        </div>
    </main>
    )
}