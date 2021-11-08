import React,{ useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import TextError from './TextError';
import { Link, useHistory } from "react-router-dom";
import {FaTwitter, FaFacebookF, FaGooglePlus} from 'react-icons/fa';
import './auth.css';
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../../../firebasefiles/firebase";
import { useAuthState } from "react-firebase-hooks/auth";




const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();

    useEffect(() => {
        if (loading) {
          // maybe trigger a loading screen
          return;
        }
        if (user) history.replace("/");
      }, [user, loading]);


const initialValues = {
    email: '',
    password: '',
}

const onSubmit= (values, { setSubmitting }) => {
    setSubmitting(false);
    signInWithEmailAndPassword(values)
    history.push('/')
  }
      
  


const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
}) 

    if(loading){
        return (
            <div>Loading...</div>
        )  
    }
    else{
        return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            <div className='body'>
                 <div className='form'>
                <Form>
                    <div className='form-logo'>
                        <Link to='/'><h2>Ixuh_online</h2></Link>
                        {error ? <p className='form-error'>{error}</p>: null }
                    </div>

                    
                    <div className='form-group'>
                        <Field 
                            placeholder='Email please'
                            type='text' id='email' name='email' className='form-input'/>
                        <ErrorMessage name='email' component={TextError}/>
                    </div>  
                                
                   <div className='form-group'>
                        <Field 
                            placeholder='Your Password'
                            type='password' id='password' name='password' className='form-input'/>
                        <ErrorMessage name='password' component={TextError}/>
                    </div>

                    <div className="form-group">
                    <button className="form-btn" disabled={loading}  type='submit'>Log in</button>
                    </div>


                    <span className="form-delimiter">
                                or connect with
                            </span>
                            <div className="form-social">
                                <a href="#" className="form-social-item fb">
                                <FaFacebookF/>
                                </a>
                                <a href="#" className="form-social-item tw">
                                <FaTwitter/>
                                </a>
                                <a href="#" className="form-social-item gg" onClick={signInWithGoogle}>
                                <FaGooglePlus/>
                                </a>
                            </div>
                            <span className="form-txt">
                                Don't have an account?
                                <Link to='/signup'>Register</Link>
                            </span>
                            <span className="form-txt">
                                <a href="#">Forgot password?</a>
                            </span>
                </Form>
            
            </div>
            </div>

           
                
        </Formik>
    )
    }
        
}

export default Login
