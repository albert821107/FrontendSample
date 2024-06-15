import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Sign Up For a Account!</h1>

      <div className="card">
        <form>
        <div className="input-account">
           <label for="account">Account :</label>
           <input name="account" id="account" type="text"></input>
        </div>
        <div className="input-password">
           <label for="password">Password :</label>
          <input name="password" id="password" type="password"></input>
          </div>
          <div className="register">
            <input className="register-button" type="submit" value="Register" />
          </div>
          </form>
      </div>
      
      <p className="read-the-docs">
        Welcome to Join Us!
      </p>
    </>
  )
}

export default App
