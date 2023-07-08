import './App.css';
import Login from './component/login/login-component';
import Example from './component/example/example-component';
import Header from './component/header/header-component';
import Introduction from './component/introduction/introduction-component';
import About from './component/about/about-component';
import Contact from './component/contact/contact-component';
import Footer from './component/footer/footer-component';
function App() {
  return (
    <div className="App">
      
      <Header />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;