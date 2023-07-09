import './contact.css';
import GetInTouch from '../getInTouch/getInTouch';
function Contact() {
    return (
        <>
        <div className="contact">
            <p>Contact {'/>'}</p>
        
                <div>
                    
                    <h3 style={{color:'white'}}>Find me on :</h3>
                </div>
                <div className='platform'>
                    <div>
                        <i className="fab fa-linkedin fa-2x"></i>
                        <a href="https://www.linkedin.com/in/amananurag/">@amananurag</a>
                    </div>
                    <div>
                        <i className="fab fa-github fa-2x"></i>
                        <a href="https://github.com/amananurag">@amananurag</a>
                    </div>
                    <div>
                        <i className="fab fa-medium fa-2x"></i>
                        <a href="https://medium.com/@amananurag">@amananurag</a>
                    </div>
                    <div>
                        <i className="fab fa-twitter fa-2x"></i>
                        <a href="https://twitter.com/amananurag">@amananurag</a>
                    </div>
                    
                    
                    



                </div>    
                <div className="get-intouch"><GetInTouch /></div>
         </div>
        </>
    )
}

export default Contact;