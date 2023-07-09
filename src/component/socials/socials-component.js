import './socials.css';
import GetInTouch from '../getInTouch/getInTouch';
import { Button, HStack } from '@chakra-ui/react';
import { FaGithubSquare, FaLinkedin, FaMedium, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Socials() {
    return (
        <>
        <div className="contact">
            <p>Contact {'/>'}</p>
        
                
                    
                    <h1 className='get-connected'>Find me on :</h1>
                
                <HStack className='socials'>
                    <a href='https://medium.com/@amananurag'>
                        <Button  colorScheme='BlackAlpha' leftIcon={<FaMedium />}>
                            Medium
                        </Button>
                    </a>
                    <a href='https://twitter.com/amananurag'>
                        <Button  colorScheme='BlackAlpha' leftIcon={<FaTwitter />}>
                            Twitter
                        </Button>
                    </a>
                    <a href='https://github.com/amananurag'>
                        <Button  colorScheme='BlackAlpha' leftIcon={<FaGithubSquare/>}>
                            GitHub
                        </Button>
                    </a>
                    <a href='https://www.linkedin.com/in/amananurag/'>
                        <Button  colorScheme='BlackAlpha' leftIcon={<FaLinkedin />}>
                            LinkedIn
                        </Button>
                    </a>
                </HStack>  
                <GetInTouch />
         </div>
        </>
    )
}

export default Socials;