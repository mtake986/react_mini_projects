import { signup, login, logout, useAuth } from './firebase';
import { useRef, useState } from 'react';
import './App.css';
import Profile from './Profile';
function App() {
  const currentUser = useAuth()

  const [loading, setLoading] = useState(false)

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSignUp = async () => {
    setLoading(true)
    try {
      await signup(emailRef.current.value, passwordRef.current.value)
      console.log('success')
    } catch (error) {
      alert(error)
    }
    setLoading(false)
  }

  const handleLogIn= async () => {
    setLoading(true)
    try {
      await login(emailRef.current.value, passwordRef.current.value)
      console.log('success')
    } catch (error) {
      alert(error)
    }
    setLoading(false)
  }

  const handleLogOut = async () => {
    setLoading(true)
    try {
      await logout();
    } catch (error) {
      alert(error);
    }
    setLoading(false);
  }
  return (
    <div id="main">

      <h3>Currently Logged in as: {currentUser ? currentUser.email : "NO USER"} </h3>

      {!currentUser &&
        <>
          <div id="fields">
            <input ref={emailRef} placeholder="email"></input>
            <input ref={passwordRef} type="password" placeholder="Password"></input>
          </div>  
    
          <button disabled={loading} onClick={handleSignUp}>Sign up</button>
          <button disabled={loading} onClick={handleLogIn}>Login</button>
        </>
      }


      {currentUser && 
        <>
          <button disabled={ loading || !currentUser} onClick={handleLogOut}>Log out</button>
          <Profile />
        </>
      }
    </div>
  );


}

export default App;
