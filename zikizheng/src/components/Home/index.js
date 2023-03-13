import './index.scss';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import portrait from '../../assets/images/portrait.png'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {;
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ','Z','i','k','i',' ','Z','h','e','n','g'];
    const studentArray = ['C','S',' ','S','t','u','d','e','n','t'];
    const uniArray = ['@',' ','M','o','n','a','s','h']
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                ind={15} />
                <br/>

                <AnimatedLetters letterClass={letterClass}
                strArray={studentArray}
                ind={26} />
                <br/>

                <AnimatedLetters letterClass={letterClass}
                strArray={uniArray}
                ind={36} />
                <br/>
                <img src={portrait}/>
                </h1>
                <h2>Data Science Specialization | Major in CyberSecurity</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                
            </div>
            
        </div>
    )
}

export default Home