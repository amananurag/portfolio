import './about.css';
import aboutImg from './../../assets/about-new.png';
function About () {

    return (
        <>
        <div className="about">
            <p>About {'/>'}</p>
        
        <div style={{color: 'white'}}>
            
            <img src={aboutImg} alt='about' width='100%' height='100%'/>
             </div>
             </div>
        </>
    )
}

export default About;