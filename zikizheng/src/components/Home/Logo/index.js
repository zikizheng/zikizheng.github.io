import './index.scss'
import Profile from '../../../assets/images/profile.png'
import { useRef } from 'react'

const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();
    
    return(
        <div className="logo-container">
            <img className='solid-profile' src={Profile} alt="Z" />
            <svg height="404" width="404">
                <circle cx="202" cy="202" r="198" stroke="white" stroke-width="6" fill="none" />
            </svg>
        </div>
    )
}

export default Logo