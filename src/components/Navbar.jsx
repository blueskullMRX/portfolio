import Logo from '../assets/logo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
const Navbar = () => {
return<nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center ">
            <img className="mx-2 w-10" src={Logo} alt="Logo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://github.com/blueskullMRX"><FaGithub/></a>
            <a href="https://www.linkedin.com/in/amgrout-zakaria/"><FaLinkedin/></a>
            <a href="https://www.instagram.com/blue._.skull/"><FaInstagram/></a>

        </div>
    </nav>

}

export default Navbar
