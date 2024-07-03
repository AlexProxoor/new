import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaUser, FaLock } from 'react-icons/fa'
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../../Firebase'

const LoginForm = ({ toggleForm }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const login = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user)
        setError('')
        setEmail('')
        setPassword('')
        navigate('/favorites')

      })
      .catch((error) => {
        console.log(error);
        setError('Sorry, couldn\'t find your account')
      })
  }

  return (
    <div className="wrapper">
      <div className="form-box login">
        <form>
          <h1>Login</h1>
         <p>почта - alex@gmail.com пороль - alex11</p>
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className="icon" />
          </div>
        
          {error && <p className="error-message">{error}</p>}
          <button type="submit" onClick={login}>
            Login
          </button>
          <div className="register-link">
            <p>
              Don't have an account?{' '}
              <a href="/" onClick={toggleForm}>
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
