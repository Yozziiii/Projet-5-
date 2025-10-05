import React from "react";
import TextBox from "../components/TextBox";
import '../styles/About.scss'
import BkAbout from '../assets/imgAbout.png'

export default function About(){

    const fiabilite = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulierement vérifiées par nos équipes."     
    const respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme."
    const service = "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit nos hôtes our nos locataires, soit de respect et de bienveillance."    
    const securite = "La sécurité est priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifierque les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."


    return (
        <main>
            <div className="parent">
                <img src={BkAbout} alt="" className="imgTop"/>
            </div>

            <div className="parentAbout">
                <TextBox title="Fiabilité" content={fiabilite} />
                <TextBox title="Respect" content={respect} />
                <TextBox title="Service" content={service} />
                <TextBox title="Sécurité" content={securite} />
            </div>
        </main>
    )
}