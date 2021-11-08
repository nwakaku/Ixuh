import React,{ useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import TextError from './TextError';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useHistory } from "react-router-dom";
import {FaTwitter, FaFacebookF, FaGooglePlus} from 'react-icons/fa';
import {
    auth,
    registerWithEmailAndPassword,
    signInWithGoogle,
  } from "../../../firebasefiles/firebase";
import './auth.css';



const Signup = () => {
const [user, loading, error] = useAuthState(auth);
const history = useHistory();


const initialValues = {
    name: '',
    email: '',
    password: '',
    comfirmPassword: ''
}

const onSubmit= (values, { setSubmitting }) => {
   if(!values.name) alert("please enter name")
   registerWithEmailAndPassword(values)
  };

  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/");
  }, [user, loading]);
      

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
    comfirmPassword: Yup.string().required('Required')
}) 
  return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            <div className='body'>
                <div className="form">
                    <Form>
                            <div className='form-logo'>
                                <Link to='/'><h2>Ixuh_online</h2></Link>
                                {error ? <p className='form-error'>{error}</p>: null }
                                </div>
                                <div className="form-group">
                                <Field
                                    type='text'
                                    placeholder='Username' 
                                    id='displayName'
                                    name='displayName'
                                    className="form-input"/>
                                <ErrorMessage name='displayName' component={TextError}/>
                            </div>
                            
                            <div className='form-group'>
                                <Field 
                                    type='email'
                                    placeholder='email'
                                    id='email'
                                    name='email' 
                                    className="form-input"/>
                                <ErrorMessage name='email' component={TextError}/>
                            </div>  
                                        
                        <div className='form-group'>
                                <Field 
                                    type='password'
                                    placeholder='password'
                                    id='password' 
                                    name='password' 
                                    className="form-input"/>
                                   
                                <ErrorMessage name='password' component={TextError}/>
                            </div>



                            <div className='form-group'>
                                <Field 
                                    type='password'
                                    placeholder='comfirmPassword' 
                                    id='comfirmPassword' 
                                    name='comfirmPassword' 
                                    className="form-input"/>
                                <ErrorMessage name='comfirmPassword' component={TextError}/>
                            </div>

                            <div className="form-group">
                            <button className="form-btn" disabled={loading}  type='submit'>Register</button>
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
                                <a href="#" className="form-social-item gg">
                                <FaGooglePlus/>
                                </a>
                            </div>
                            <span className="form-txt">
                                Don't have an account?
                                <Link to='/login'>login</Link>
                            </span>
                            <span className="form-txt">
                                <a href="#">Forgot password?</a>
                            </span>
                        {/* </div> */}

                    
                        
                    </Form>
                </div>
            </div>
            
                
            
        </Formik>
    )
}

export default Signup
