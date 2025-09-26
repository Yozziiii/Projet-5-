import React from "react";
import BkHome from '../assets/backgroundHome.png'
import Logements from "../data/data.json"
import '../styles/Home.css'
import { Link } from "react-router-dom"

export default function Home(){

    function Logement() {
        
        return Logements.map(logement => (
        <div key={logement.id} >
          <Link to={`/FicheLogement/${logement.id}`}>
            <img src={logement.cover} alt="logement "/>
            <span>{logement.title}</span>
          </Link>  
        </div>        
        ));
    }
    console.log("logement :" +  Logement)


    return (
        <main>
            <div className="parent">
                <img  className="imgTop" src={BkHome} alt=""/>
                <span>Chez vous, partout et ailleurs</span>
            </div>
                <div className="logement" ><Logement/></div> 
        </main>
    )
}