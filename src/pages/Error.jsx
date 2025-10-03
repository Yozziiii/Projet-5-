import React from "react";
import '../styles/Error.scss'
import { Link } from "react-router-dom"


export default function Error(){

    
    return (
        <main>
            <h1>404</h1>
            <h2>Oups ! La page que vous demandez n'existe pas.</h2>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </main>
    )
}