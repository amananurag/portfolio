import './about.css';
import aboutImg from './../../assets/about-new.png';
function About () {

    return (
        <>
        <div className="about">
            <p>About {'/>'}</p>
        
        
            
            <img src={aboutImg} style={{marginTop: '20px'}}alt='about' width='100%' height='100%'/>
            
             </div>
        </>
    )
}

export default About;