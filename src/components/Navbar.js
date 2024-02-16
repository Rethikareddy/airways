import React from 'react'
import { Link } from 'react-router-dom'

export default function Background() 
{
  return (
    <>
 
    <div className="navbar">
        <div className='rows'>
          <div className='cols md 10 cols md 6 auto'>
       <h1 align="center" color='red'> Welcome To Airlines Reservation Systems</h1>
       </div> 
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto ms-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contact">Contact</Link>
        </li>
        <li className="container-fluid">
          <Link className="nav-link dropdown-toggle" to="/Ticket" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Ticket
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/Ticket/Bclass">Business class</Link></li>
            <li><Link className="dropdown-item" to="/Ticket/Eclass">Economic class</Link></li>
            
          </ul>
        </li>
        
      </ul>
      
    </div>
  </div>
  
</nav>
</div>
</div>

  
</>
      
  )
}
