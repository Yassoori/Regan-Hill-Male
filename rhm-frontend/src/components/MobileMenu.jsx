import {Link} from 'react-router-dom'
import { X } from 'react-bootstrap-icons'

const MobileMenu = ({closeMethod}) => {
  return (
    <div className="mobile-menu-container">
      <button id='close-nav-menu' onClick={closeMethod}>
        <X />
      </button>
      <ul id='mobile-menu'>
        {/* Mobile Nav Links */}
        <li>
          <Link to='/' onClick={closeMethod}>Home</Link>
        </li>
        <li>
          <Link to='/work' onClick={closeMethod}>Work</Link>
        </li>
        <li>
          <Link to='/about' onClick={closeMethod}>About</Link>
        </li>
        <li>
          <Link to='/contact' onClick={closeMethod}>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default MobileMenu