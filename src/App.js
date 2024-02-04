import Header from "./shared/components/Header"
import "./App.css"; 
import {BrowserRouter} from 'react-router-dom';
import Body from "./shared/components/Body.jsx"
import Footer from "./shared/components/Footer.jsx"
import "./App.css"
// import Scheme from "./shared/pages/Scheme.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
           <Header />
            {/* <Body /> */}
           {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
