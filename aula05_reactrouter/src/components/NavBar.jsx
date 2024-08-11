import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <Link to="/">Inicial01</Link><br/>
        <Link to="/noticias">noticias</Link><br/>
        <Link to="/dpo-lgpd">DPO Lgpd</Link><br/>
    </div>
  )
}

export default NavBar