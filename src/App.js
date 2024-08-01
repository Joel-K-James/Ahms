import logo from './logo.svg';
import { Navbar } from './Components/Navbar';
import { Allroutes } from './Routes/Allroutes';
import Footer from './Components/Footer';
function App() {

  return (
    <div className="App">
    <Navbar />
    <Allroutes />
    <Footer />
    </div>
  );
}


export default App;
