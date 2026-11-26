import '../App.css'
import { useState } from 'react'
function Login() {
  const [Email, setEmail] = useState('')
  const [Pass, setPass] = useState('')
  const formsubmit=(event)=>{
  event.preventDefault();
  console.log('Email:',Email)
  console.log('Password:',Pass)
};
return (<>
  <div className="Login">
    <h1>COLD SLOT LOGIN</h1>
  </div>
  <form onSubmit={formsubmit}>
    <input type="email" required placeholder="Enter Email" name="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />   
    <input type="password" required placeholder="Enter Password" name="password" value={Pass} onChange={(e) => setPass(e.target.value)} />   
    <button type="submit">Login</button>
  </form>
  </>
  )
}
export default Login