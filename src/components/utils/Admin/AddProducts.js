import React,{ useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import TextError from '../authentication/TextError';
import { Link, useHistory } from "react-router-dom";
import '../authentication/auth.css';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, db } from '../../../firebasefiles/firebase'



const Signup = () => {
const history = useHistory();
const [error, seterror] = useState()


const initialValues = {
    name: '',
    memory: '',
    image: '',
    price: ''
}

const handleSubmit= (values, { setSubmitting }, resetForm) => {
   if(!values.name) alert("please enter name");

//    testing files
const storage = getStorage();
const storageRef = ref(storage, 'images/' + values.image.name);

const uploadTask = uploadBytesResumable(storageRef, values.image);

uploadTask.on('state_changed', 
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
  }, 
  (error) => {
    console.log(error)
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      db.collection('files').add({
          name:values.name,
          memory:values.memory,
          image:downloadURL,
          price:values.price
      })
    });
  }
);
  };
  

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    memory: Yup.string().required('Required'),
    image: Yup.string().required('Required'),
    price: Yup.string().required('Required')
}) 
  return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
                    {(formProps, values) => (
            <div className='body'>
                <div className="form">
                        <Form>
                        <div className='form-logo'>
                            <Link to='/admin'><h2>Ixuh Admin</h2></Link>
                            {error ? <p className='form-error'>{error}</p>: null }
                            </div>
                            <div className="form-group">
                            <Field
                                placeholder='Item name' 
                                id='name'
                                name='name'
                                className="form-input"/>
                            <ErrorMessage name='name' component={TextError}/>
                        </div>
                        
                        <div className='form-group'>
                            <Field 
                                placeholder='memory'
                                id='memory'
                                name='memory' 
                                className="form-input"/>
                            <ErrorMessage name='memory' component={TextError}/>
                        </div>  
                                    
                    <div className='form-group'>
                            <input 
                                type='file'
                                placeholder='image'
                                id='image' 
                                name='image'
                                className="form-input" 
                                onChange={(e) => {
                                    const file = e.target.files[0]; 
                                    formProps.setFieldValue("image", file)
                                }
                               
                                }
                                />
                               
                            <ErrorMessage name='image' component={TextError}/>
                        </div>


                        <div className='form-group'>
                            <Field 
                                placeholder='price' 
                                id='price' 
                                name='price' 
                                className="form-input"/>
                            <ErrorMessage name='price' component={TextError}/>
                        </div>

                        <div className="form-group">
                        <button className="form-btn" type='submit'>Add To Database</button>
                        </div>

                </Form>
                        
                    
                </div>
            </div>
                    )}
                          
            
        </Formik>
    )
}

export default Signup
