import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from "./logo.jpg"
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, db } from './firebaseConfig';
import { increment, onValue, ref, update } from 'firebase/database';
import { doc, updateDoc, getFirestore, collection } from 'firebase/firestore';
import MenuIcon from '@mui/icons-material/Menu';
// import { firebase } from 'firebase/app';


// import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  
  const [user, setUser] = useState(null);
  const [point, setPoint] = useState(0);
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        setUser(user);
        const pointRef = ref(db, 'users/' + user.uid + '/points');
        onValue(pointRef, (snapshot) => {
          const data = snapshot.val();
          setPoint(data);
          console.log("Points:", data);
        });

      } else {
        // User is signed out
        // ...
        setUser(null)
        console.log("user is logged out!");
      }
    });
    
  }, []);



  const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
            alert("signout done");
        }).catch((error) => {
        // An error happened.
        });
    }

    
  return (
    <>
      <div className='header'>
      <div className="header__left"></div><img src={logo} alt=""/>
      <a href="#" className="icon" onclick="toggleNavbar()"><MenuIcon/></a>
        <div className="header__right" id="navbar">
        {/* <img src={logo} alt=""/> */}
          <NavLink className="headerOption" activeClassName="active_class" to="/">Home</NavLink>
          <NavLink className="headerOption" activeClassName="active_class" to="/about">About Us</NavLink>
          <NavLink className="headerOption" activeClassName="active_class" to="/contact">Contact Us</NavLink>
          <NavLink className="headerOption" activeClassName="active_class" to="/scheme">All Schemes</NavLink>
          <NavLink className="headerOption" activeClassName="active_class" to="/sponsor">Our Collaborators</NavLink>
          {/* <NavLink className="headerOption" activeClassName="active_class" to="/signUp">Sign Up</NavLink> */}
          {user===null && <NavLink className="headerOption" activeClassName="active_class" to="/signUp">Sign Up</NavLink>} 
          {user != null && <><NavLink className="headerOption" activeClassName="active_class" to="/">Hello {user.displayName}! Points: {point}</NavLink>
          <NavLink className="headerOption" activeClassName="active_class" to="/" onClick={handleLogout}>Logout</NavLink></>}
          
          {function toggleNavbar() {
            var x = document.getElementById("navbar");
            if (x.className === "header__right") {
              x.className += " responsive";
            } else {
              x.className = "header__right";
            }
          }}

        </div>
        
      {/* <div className="header__right">
        <div className="header__search"> 
          <SearchIcon />
          <input type="text" placeholder="Search" className='search-input'/>
        </div> 
      </div> */}
      </div>
    </>
  );
}

export default Navbar