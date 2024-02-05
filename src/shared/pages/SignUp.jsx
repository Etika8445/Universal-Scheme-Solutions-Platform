import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword, updateProfile  } from 'firebase/auth';
import { auth , db} from '../../shared/components/firebaseConfig';
import { ref, set } from 'firebase/database';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const Signup = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            console.log(name);

            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {
                // Profile updated!
                // ...
            }).catch((error) => {
                // An error occurred
                // ...
            });    

            writeUserData(user.uid, name, email);
            alert("signed in successfully!");

            navigate("../../../src/pages/Homepages.jsx");  
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            alert(errorMessage);
            // ..
        });
 
    }

    function writeUserData(userId, name, email) {
        set(ref(db, 'users/' + userId), {
          username: name,
          email: email,
          points: 1
        });
      }
 
  return (
    <>
    <main>        
        <section>
            <div className='signup-page'>               
                    <form>
                        <div className='fill'>
                            <label htmlFor="name">
                                <PersonOutlineIcon/>
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
                        <div>
                            <label htmlFor="email-address">
                                <EmailIcon/>
                            </label>
                            <input className='signup-input'
                                type="email"
                                label="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}  
                                required                                    
                                placeholder="Email address"                                
                            />
                        </div>

                        <div className='fill'>
                            <label htmlFor="password">
                                <LockIcon/>
                            </label>
                            <input className='signup-input'
                                type="password"
                                label="Create password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required                                 
                                placeholder="Password"              
                            />
                        </div>                                             
                        
                        <button className='signup-btn'
                            type="submit" 
                            onClick={onSubmit}                        
                        >  
                            Sign up                                
                        </button>
                                                                     
                    </form>
                   
                    <p>
                        Already have an account?{' '}
                        <NavLink to="/login" >
                            Sign in
                        </NavLink>
                    </p>             
            </div>
        </section>
    </main>
    </>
  )
}
 
export default Signup
