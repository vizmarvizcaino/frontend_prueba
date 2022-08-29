import '../stylesheet/header.css';
import bgImagen from '../assets/bg-image.jpg'
import { Link, Route } from "wouter";
import SobreMi from '../page/Sobre-Mi';
import PortafolioWeb from '../page/Portafolio-Web';
import Contacto from '../page/Contacto';

function Header () {
    return (
        <div className="container">
            <div className="navbar">
                
                <Link href='/'><h2>VIZMAR V.</h2></Link>
              
            <ul>
                <li><Link href='/'><a>INICIO</a></Link></li>
                <li><Link href='/sobre-mi'><a>SOBRE MI</a></Link></li>
                <li><Link href='/portafolio-web'><a>PORTAFOLIO WEB</a></Link></li>
                <li><Link href='/contacto'><a>CONTACTO</a></Link></li> 
            </ul>
            </div>   
            <div className="routes">
                <Route path="/inicio" component={SobreMi} />
                <Route path="/sobre-mi" component={SobreMi} />
                <Route path="/portafolio-web" component={PortafolioWeb} />
                <Route path="/contacto" component={Contacto} />
            </div>
        </div>
    )
}
export default Header;