import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth, db } from '../../shared/components/firebaseConfig';
import { NavLink, useNavigate } from 'react-router-dom'
import { increment, ref, update } from 'firebase/database';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
 
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState("");
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(name);
            navigate("../../../src/pages/Homepages.jsx")
            console.log(user);
            

            const dbRef = ref(db);

            const updates = {};
            updates[`users/${user.uid}/points`] = increment(1);
            update(dbRef, updates);
            alert("signed up successfully!");

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            alert(errorMessage);
        });
       
    }
 
    return(
        <>
            <main>        
                <section>
                    <div className='signup-page'>                             
                        <form>   
                            <div className='fill'> 
                                <label htmlFor="name">
                                <PersonOutlineIcon className='icon'/>
                                </label>
                                <input className='signup-input'
                                    id="name"
                                    name="name"
                                    type="text"                                    
                                    required                                                                                
                                    placeholder="Enter your name"
                                    onChange={(e)=>setName(e.target.value)}
                                />
                            </div>                                           
                            <div className='fill'>
                                <label htmlFor="email-address">
                                    <EmailIcon/>
                                </label>
                                <input className='signup-input'
                                    id="email-address"
                                    name="email"
                                    type="email"                                    
                                    required                                                                                
                                    placeholder="Email address"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>

                            <div className='fill'>
                                <label htmlFor="password">
                                    <LockIcon/>
                                </label>
                                <input className='signup-input'
                                    id="password"
                                    name="password"
                                    type="password"                                    
                                    required                                                                                
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                                                
                            <div>
                                <button className='signup-btn'                               
                                    onClick={onLogin}                                        
                                >      
                                    Login                                                                  
                                </button>
                            </div>                               
                        </form>
                       
                        <p className="login-msg">
                            No account yet? {' '}
                            <NavLink to="/signup">
                                Sign up
                            </NavLink>
                        </p>
                                                   
                    </div>
                </section>
            </main>
        </>
    )
}
 
export default Login