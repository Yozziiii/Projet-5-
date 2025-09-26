import '../styles/Header.css'
import KasaLog from '../assets/kasaLog.svg'
import { Link } from "react-router-dom"

export default function Header() {
    return (
    <header>
        <img src={KasaLog} alt='Logo du site '/>
        <nav>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/About">A Propos</Link></li>
            </ul>
        </nav>
    </header>
    )
}