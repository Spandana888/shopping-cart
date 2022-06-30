import react from 'react';
import { Form } from "react-bootstrap";


const signin = () => {
  const handleSubmit = () =>{
  }
  return (
    <div className='registration-conatiner'>
      <div className='registration-left'>
         <h1>Login</h1>
         <p>Get access to your Orders, Wishlist and Recommendations.</p>
      </div>
      <div className='registration-right'>
      <Form onSubmit={handleSubmit}>
      <div className="form">
          <div className="form-body">
              <div>
                 <label htmlFor="email">Email</label><br />
                 <input  type="email" id="email" className="form__input" placeholder="Email" />
              </div>
              <div>
                <label htmlFor="password">Password</label><br />
                <input className="form-input" type="password"  id="password" placeholder="Password" />
              </div>
          </div>
          <div>
              <button type="submit" className="signup-button">Login</button>
          </div>
      </div>  
      </Form>
      </div>
    </div>
  )
}

export default signin