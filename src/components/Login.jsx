import React from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate();
  return (
    <>
    <div>login page</div>
    <button onClick ={()=> navigate('Home')}>back</button>
    </>
  )
}

export default Login