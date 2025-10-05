import '../styles/Footer.scss'
import FooterLogo from '../assets/FooterLogo.svg'


export default function Footer() {
    return (
    <footer>
        <img src={FooterLogo} alt='Logo du site '/>
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
    )
}