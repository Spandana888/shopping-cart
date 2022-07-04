import react from 'react';
import { Form } from "react-bootstrap";
import { Link } from 'react-router-dom';

const signin = () => {
  const initialValue = {  email: "", password: "" };
  const [formValues, setFormValues] = react.useState(initialValue);
  const [errors, setErrors] = react.useState(false);
  const [isSubmit, setIsSubmit] = react.useState(false);
  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
  }
  const handleSubmit = (e) => {
      e.preventDefault();
      setErrors(validate(formValues));
      setIsSubmit(true);
      if (Object.keys(errors).length === 0 && isSubmit) {
        window.location.href = "/"
      }
  }

  const validate = (values) =>{
    const passwordValue = values.password;
    const formerrors = {};
        const regx = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            formerrors.email = 'Email is required';
        } else if (!regx.test(values.email)) {
            formerrors.email = 'This is not valid email format';
        }
        if (!passwordValue) {
            formerrors.password = 'Password is required';   
        } else if (passwordValue.length <= 8){
            formerrors.password = 'At least minumum 8 characters'; 
        }
        return formerrors;
  }

  return (
    <div className='registration-conatiner'>
    <div className='registration-left'>
       <h2>Login</h2>
       <p>Get access to your Orders, Wishlist and Recommendations.</p>
    </div>
    <div className='registration-right'>
    <Form onSubmit={handleSubmit}>
    <div className="form">
        <div className="form-body">
            <div>
               <label htmlFor="email" id="emailLabel">Email</label><br />
               <input id="email" type="text" placeholder='Email' className={errors.email ? 'error-border' : ''} name="email" value={formValues.email} onChange={handleChange} aria-labelledby="emailLabel" />
                <p className='error'>{errors.email}</p>
            </div>
            <div>
              <label htmlFor="password" id="passwordLabel">Password</label><br />
              <input id="password" type="password" placeholder='Password' className={errors.password ? 'error-border' : ''} name="password" value={formValues.password} onChange={handleChange} aria-labelledby="emailLabel"/>
              <p className='error'>{errors.password}</p>
            </div>
        </div>
        <div>
            <button type="submit" className="signup-button">Login</button>
        </div>
        <div className="register-nav">
          <p>Don't have account??</p>
            <Link to="/register" role="link">Register</Link>
        </div>
    </div>  
    </Form>
    </div>
  </div>
  );
}

export default signin