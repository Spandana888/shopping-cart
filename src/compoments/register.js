import React from 'react'

const register = () => {
  return (
    <div className='registration-conatiner'>
      <div className='registration-left'>
         <h1>Signup</h1>
         <p>We do not share your personal details with anyone.</p>
      </div>
      <div className='registration-right'>
      <div className="form">
          <div className="form-body">
                  <input className="form-input" type="text" id="firstName" placeholder="First Name" required/>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="Last Name" required/>
                  <input  type="email" id="email" className="form__input" placeholder="Email" required/>
                  <input className="form-input" type="password"  id="password" placeholder="Password" required/>
                  <input className="form-input" type="password" id="confirmPassword" placeholder="Confirm Password" required/>
          </div>
          <div>
              <button type="submit" className="signup-button">Signup</button>
          </div>
      </div>  
      </div>
    </div>
  )
}

export default register