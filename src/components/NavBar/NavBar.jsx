import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
const NavBar = () => {
  const imgLogo = "https://d22fxaf9t8d39k.cloudfront.net/d54114397b0654c633952f30c880110bc6fa619dd242b7721044cc648229bb0e96121.jpeg"
  return (
    <header>
      <img className='logo' src={imgLogo} alt="Logo Clementina" />
      <div className='botones'>
        <button>Iniciar Sesion</button>
        <span>|</span>
        <button>Crear Cuenta</button>
      </div>
      <nav className='menu'>
        <ul>
          <li>Inicio</li>
          <li>Productos</li>
          <li>Contacto</li>
        </ul>
      <CartWidget />
      </nav>
    </header>
  )
}

export default NavBar