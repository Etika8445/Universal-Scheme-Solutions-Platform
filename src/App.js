import Header from "./shared/components/Header"
import "./App.css"; 
import {BrowserRouter} from 'react-router-dom';
import Footer from "./shared/components/Footer"

function App() {

  return (
    <>
      <BrowserRouter>
           <Header />
           <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
