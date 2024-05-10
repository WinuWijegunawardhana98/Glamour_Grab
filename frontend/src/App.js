import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Header';
import Home from './pages/Header';
import About from './pages/Header';
import Contact from './pages/Header';
import Products from './pages/Header';
import BuyNow from './pages/Header';
// import NotFound from './pages/Header';
import Login from './components/Login'; // Import the Login component
import MeasurementForm from './components/MeasurementForm'


function App() {
  const initialValues = { username: "", email: "", password: "" };
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [formValues , setFormValues] =useState(initialValues);
  
  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmitForm = (formData) => {
    formData.preventDefault();
    const errors = validate(formData);
    setFormErrors(errors);
    setIsSubmit(true);
  }; 

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" component={<Home />} />
        <Route path="/about" component={<About />} />
        <Route path="/contact" component={<Contact />} />
        <Route path="/products" component={<Products />} />
        <Route path="/buy-now" component={<BuyNow />} />
        <Route path="/login" component={<Login />} /> 
        <Route path="/measurement-form" component={<MeasurementForm />} /> 
        {/* <Route component={NotFound} /> Catch-all route for 404 */}
      </Routes>
      <Footer />
      <div className='container'>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui message success">Signed in successfully</div>
        ) : (
          <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        )}

        <form onSubmit={(e) => { e.preventDefault(); handleSubmitForm(formValues); }}>

          <h1>Login Form</h1>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formValues.username}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.username}</p>
            <div className="field">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.email}</p>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.password}</p>
            <button className="fluid ui button blue">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
