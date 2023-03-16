import "./menu.css";
import logo from    "../assets/imagenes/logo.jpg";
import fondo1 from "../assets/imagenes/fondo1.jpg"
export function Menu() {

    return <div className="C-contenedor" style={{
        backgroundImage: `url("${fondo1}")` 
    }}>
        <div className="p-contenedor">

            <nav className="menu">
                <div className="menu-logo">
                    <img className="logo" src={logo}></img>
                </div>
                <ul className="menu-contenedor">
                    <li className="menu-contenedor-botones"><a href="#">Home</a></li>
                    <li className="menu-contenedor-botones"><a href="#">Characters</a></li>
                    <li className="menu-contenedor-botones"><a href="#">Chacpters</a></li>
                </ul>
            </nav>
        </div>
    </div>
}