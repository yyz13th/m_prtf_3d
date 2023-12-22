import { useEffect } from "react";
import { NavLink } from "react-router-dom"

const Navbar = () => {

  useEffect(() => {
    const navbar = document.querySelector(".header");
    navbar.style.transition = "transform 0.5s ease-in-out";
    navbar.style.transform = "translateY(0)";
  }, []);



  return (
    <header className="header" style={{ transform: "translateY(-100%)" }}>
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
          <h1 className="gold-gradient_text">EE</h1>
        </NavLink>

        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={({isActive}) => isActive ? "text-yellow-600" : 'text-gray-400'}>
                About
            </NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive ? "text-yellow-600" : 'text-gray-400'}>
                Projects
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar