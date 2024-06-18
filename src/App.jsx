import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data1, setData1] = useState('');
  const [data2, setData2] = useState('');

   const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:3000/api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data1: data1, data2: data2 }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

  return (
    <>
      <h1>Sign Up For a Account!</h1>

      <div className="card">
        <form onSubmit={handleSubmit}>
        <div className="input-account">
           <label>Account :
           <input name="account" id="account" type="text" value={data1} onChange={(e) => setData1(e.target.value)}></input></label>
        </div>
        <div className="input-password">
           <label>Password :
          <input name="password" id="password" type="password" value={data2} onChange={(e) => setData2(e.target.value)}></input></label>
          </div>
          <div className="register-section">
            <button className="register-button" type="submit">Register</button>
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
