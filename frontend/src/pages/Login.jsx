import React, { useState } from 'react'
import { doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword } from '../firebase/auth'; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate(); // Use navigate for redirection

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const login = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(formData.email, formData.password);
        navigate('/'); // Redirect to home page upon successful sign-in
      } catch (error) {
        setErrorMessage(error.message);
        setIsSigningIn(false);
      }
    }
  };

  const signup = async (e) => {
    e.preventDefault();
    if (!isRegistering) {
      setIsRegistering(true);
      try {
        await doCreateUserWithEmailAndPassword(formData.email, formData.password);
        setFormData({ username: "", email: "", password: "" });
        setIsRegistering(false);
        setShowAlert(true);
      } catch (error) {
        setErrorMessage(error.message);
        setIsRegistering(false);
      }
    }
  };

  return (
    <section className='mx-auto max-w-[1440px] px-6 lg:px-20 flex justify-center items-center flex-col pt-20'>
      <div className='max-w-[555px] h-auto bg-white m-auto px-14 py-10 rounded-md'>
        <h3 className='text-[32px] leading-tight md:text-[36px] md:leading-[1.3] mb-4 font-semibold'>{state}</h3>
        <form onSubmit={state === "Login" ? login : signup} className='flex flex-col gap-4 mt-7'>
          {state === "Sign Up" && (
            <input 
              name="username" 
              type="text" 
              placeholder='Your Name' 
              value={formData.username} 
              onChange={changeHandler} 
              className='h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl' 
            />
          )}
          <input 
            name="email" 
            type="email" 
            placeholder='Email Address' 
            value={formData.email} 
            onChange={changeHandler} 
            className='h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl' 
          />
          <input 
            name="password" 
            type="password" 
            placeholder='Password' 
            value={formData.password} 
            onChange={changeHandler} 
            className='h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl' 
          />
          <button 
            type="submit" 
            className='text-[15px] font-[400] border border-green-90 bg-green-90 px-7 py-3 text-white transition-all bg-black rounded-full my-5 w-full'
            disabled={isSigningIn || isRegistering} 
          >
            Continue
          </button>
        </form>
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        {state === "Sign Up" ? (
          <p className='text-black font-bold'>
            Already have an account?{" "}
            <span onClick={() => setState("Login")} className='text-blue-300 underline cursor-pointer'>
              Login
            </span>
          </p>
        ) : (
          <p className='text-black font-bold'>
            Create an account?{" "}
            <span onClick={() => setState("Sign Up")} className='text-blue-300 underline cursor-pointer'>
              Click here
            </span>
          </p>
        )}
        <div className='flex justify-center items-center mt-6 gap-3'>
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">By continuing, I agree to the terms of use & privacy policy.</label>
        </div>
      </div>
    </section>
  );
}

export default Login;
