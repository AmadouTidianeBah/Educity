import './Navbar.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-scroll'

const navbar = () => {
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      window.scrollY > 1 ? setSticky(true) : setSticky(false)
    })
  }, [])

  return (
    <nav className={`container navbar ${sticky && 'dark-nav'}`}>
        <img src={logo} alt="logo" className='nav-logo' />
        <ul>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
        </ul>
    </nav>
  )
}

export default navbar