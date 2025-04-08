import { Link } from "react-router-dom";

function NavBar(){
  return(
    <nav className="bg-gray-800 text-white p-4">
    <ul className="flex space-x-4">
      <li><Link to="/" className="hover:underline">Home</Link></li>
      <li><Link to="/about" className="hover:underline">About</Link></li>
      <li><Link to="/contact" className="hover:underline">Contact</Link></li>
    </ul>
    </nav>
  )
  
}

export default NavBar;