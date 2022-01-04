import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.css'


export const NavBar = () => {

    return (
        <header className="navbar px-5">
            <Link to="/" className="links"><h1>Kpop-Store</h1></Link>
            
            <nav>
                <ul>
                    <li><Link to="/category/zapatillas" className="links">Zapatillas</Link></li>
                    <li><Link to="/category/buzos" className="links">Buzos</Link></li>
                    <li><Link to="/category/remeras" className="links">Remeras</Link></li>
                </ul>
            </nav>

            <Link to="/cart"><CartWidget /></Link>
        </header>
    )
}


// export default NavBar