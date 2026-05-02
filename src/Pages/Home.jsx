import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/style.css'

export default function Home() {
  return (
    <div className='home'>
      <div className='homeText' style={{border:"5px solid white",outline:"2px solid black"}}>
        <h1>Welcome To Bobsun Milk Tracker</h1>

        <p>
          A simple web app to manage monthly milk records.
        </p>

        <Link to='/main'>
          <button className='btn_desi'>Go To Bundles</button>
        </Link>
      </div>
    </div>
  )
}