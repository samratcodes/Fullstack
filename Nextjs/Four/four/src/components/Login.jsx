import React from 'react'

const Login = () => {
    const hadleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <div>
      <form onSubmit={hadleSubmit} >
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <input type="submit" value="Login"/>
      </form>
    </div>
  )
}

export default Login
