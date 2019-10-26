 import React from 'react';


 const Navbar = (props) =>{

  return (
        <div className='navbarCont' >
            <ul className ='navLinks'>
                <li>Clicky Game </li>
                <li>{props.message}</li>
                <li>{`Score : ${props.wins} wins and ${props.losses} losses `}</li>
            </ul>

        </div>
    )  

 }

 export default Navbar