import './App.css';
import { Navbar, Home, Navbar2, History, Climb, ClimbSlide1, ClimbSlide2, Footer } from "./components/index";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div id="body-container">
      <Navbar />
      <Home />
      <Navbar2 />
      <History className="history"/>
      <Climb className="climb"/>
      <ClimbSlide1 />
      <ClimbSlide2 />
      <Footer />
    </div>
  )
}

export default App;
