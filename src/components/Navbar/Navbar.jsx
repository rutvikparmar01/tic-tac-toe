import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='nav'>
     <button className='btn1'> <Link className='play' to='/Grid/'>Play</Link>
     </button>
     <button className='btn2'>
     <Link className='Home' to='/'>Home</Link>
     </button>

     {/* <img className='img'  src="https://thumbs.dreamstime.com/b/ox-game-whiteboard-equal-result-59251026.jpg?w=768" alt="" srcset="" /> */}
    </div>
  )
}
