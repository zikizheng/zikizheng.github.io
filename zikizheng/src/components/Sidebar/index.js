import './index.scss'
import { Link, NavLink} from 'react-router-dom'
import LogoZ from '../../assets/images/logo-Z-slogan.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithubSquare, faFacebookSquare, faInstagramSquare} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div>
        <div className='navbar'>
            <Link className='logo' to ='/'>
                <img src={LogoZ} alt="logo"/>
            </Link>
        <nav>
            <div className='background'>
                <NavLink exact="true" activeclassname="active" className="home-link" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
                <ul>
                    <li>
                        <a target="_blank" rel='noreferrer' className="linkedin" href="https://www.linkedin.com/in/ziki-zheng/">
                            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel='noreferrer' className="github" href="https://github.com/zikizheng">
                            <FontAwesomeIcon icon={faGithubSquare} color="#4d4d4e"/>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel='noreferrer' className="facebook" href="https://www.facebook.com/ziki.zheng">
                            <FontAwesomeIcon icon={faFacebookSquare} color="#4d4d4e"/>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel='noreferrer' className="insta" href="https://www.instagram.com/ziki.zh/">
                            <FontAwesomeIcon icon={faInstagramSquare} color="#4d4d4e"/>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        </div>  
    </div>
)

export default Sidebar