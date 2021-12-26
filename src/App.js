
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Projects/>
      <Footer />
      

    </div>
  );
}

export default App;
