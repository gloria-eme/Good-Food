import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <>
        <p>GOOD-FOOD</p>
        <NavLink className= "nav" to="">Home</NavLink>
        <NavLink className= "nav" to="/platos">Platos</NavLink>
        <NavLink className= "nav" to="/addAFood">Añade un plato</NavLink>
        </>
    )
}

export default Header;