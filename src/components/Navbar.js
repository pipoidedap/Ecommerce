import React, { useContext } from 'react'
import SoldContext from '../contexts/SoldContext'

const Navbar = () => {

  const { soldProducts } = useContext(SoldContext)

  const imgUrl = 'https://cdn.freebiesupply.com/logos/large/2x/grupo-roma-logo-png-transparent.png'

  return (
    <nav>
      <div />
      <div>
        <img src={imgUrl} alt="roma-logo" className="navbar-image" />
      </div>
      <div>🛒{soldProducts.length}</div>
    </nav>
  );
}

export default Navbar