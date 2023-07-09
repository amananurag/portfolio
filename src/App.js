import './App.css';
import Header from './component/header/header-component';
import About from './component/about/about-component';
import Socials from './component/socials/socials-component';
import Footer from './component/footer/footer-component';
import {ChakraProvider} from '@chakra-ui/react';
function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <Header />
      
      <About />
      <Socials />
      <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;