// import della parte di componenti di navigazione per routing
import { Link, NavLink } from "react-router-dom";

// dati menù
const links = [
    { path: '/', label: 'Home' },
    { path: '/aboutUs', label: 'About Us' },
    { path: '/CardShop', label: 'Negozio' }
]


const NavBar = () => {
    return (
        <nav>
            <ul>
                {links.map(link => (
                    <li>
                        <NavLink to={link.path}>{link.label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar