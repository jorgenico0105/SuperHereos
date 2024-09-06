import React from 'react'
import { replace, useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate=useNavigate( )
  const handleLogin=()=>{
    navigate('/marvel',{
      replace:true
    }
    )
  }
  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />
      <button 
      className='btn btn-primary'
      onClick={handleLogin}
      >
        Login
      </button>
    </div>
  )
}
