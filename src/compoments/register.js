import react from 'react';
import { Form } from "react-bootstrap";

const register = () => {
  const initialValue = {  firstname: "", lastname: "", email: "", password: "", confirmpassword: ""};
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
        if(!values.firstname){
          formerrors.firstname = 'Firstname is required';
        }
        if(!values.lastname){
          formerrors.lastname = 'Lastname is required';
        }
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
        if (!values.confirmpassword) {
          formerrors.confirmpassword = 'Password is required';   
        } else{
          if(!values.confirmpassword !== passwordValue){
            formerrors.confirmpassword = 'Password is not matchings'; 
          }
        }
        return formerrors;
  }

  return (
    <div className='registration-conatiner'>
      <div className='registration-left'>
        <h2>Signup</h2>
        <p>We do not share your personal details with anyone.</p>
      </div>
      <div className='registration-right'>
        <Form onSubmit={handleSubmit}>
          <div className="form">
            <div className="form-body">
              <div>
                 <label htmlFor="firstname" id="firstnameLabel">Firstname</label><br />
                 <input id="firstname" type="text" placeholder='Firstname' name="firstname" value={formValues.firstname} onChange={handleChange} aria-labelledby="firstnameLabel"/>
                 <p className='error'>{errors.firstname}</p>
              </div>
              <div>
                 <label htmlFor="lastname" id="lastnameLabel">Lastname</label><br />
                 <input id="lastname" type="text" placeholder='Lastname' name="lastname" value={formValues.lastname} onChange={handleChange} aria-labelledby="lastnameLabel" />
                 <p className='error'>{errors.lastname}</p>
              </div>
              <div>
               <label htmlFor="email" id="emailLabel">Email</label><br />
               <input id="email" type="text" placeholder='Email' name="email" value={formValues.email} onChange={handleChange} aria-labelledby="emailLabel"/>
                <p className='error'>{errors.email}</p>
            </div>
            <div>
              <label htmlFor="password" id="passwordLabel">Password</label><br />
              <input id="password" type="password" placeholder='Password' name="password" value={formValues.password} onChange={handleChange}  aria-labelledby="passwordLabel"/>
              <p className='error'>{errors.password}</p>
            </div>
            <div>
              <label htmlFor="forgotpassword" id="forgotpasswordLabel">Confirm Password</label><br />
              <input id="forgotpassword" type="password" placeholder='Confirm Password' name="confirmpassword" value={formValues.confirmpassword} onChange={handleChange}  aria-labelledby="forgotpasswordLabel"/>
              <p className='error'>{errors.confirmpassword}</p>
            </div>
              <button type="submit" className="signup-button">Signup</button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default register