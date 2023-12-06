import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
const Register = () => {
    return (
        <Formik
        initialValues={{firstname:'',lastname:'',email:'',password:'',cpassword:''}}
        validationSchema={Yup.object({
            firstname:Yup.string()
            .max(20,'must be 20 charactter or less')
            .required('first name is mandatory') ,
            lastnamestname:Yup.string()
            .max(20,'must be 20 charactter or less')
            .required('last name is mandatory') ,
            email:Yup.string()
            .email('invalid email format')
            .required('email is mandatory'),
            password:Yup.string()
            .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,'password must have Minimum eight characters, at least one letter, one number and one special character:')
            .required('passowrd cannot be empty'),
            cpassword:Yup.string()
            .required('confirm passowrd first')
            .oneOf([Yup.ref('password'),null],'password and confirm password must match')


        })}
        >
            <div className="container my-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5 shadow p-3">
                        <Form >
                            <div className="mb-2">
                                <label htmlFor="FirstName">FirstName</label>
                                <Field type='text' id='firstname' name='firstname' className='form-control' />
                                <ErrorMessage name='firstname'>
                                    {msg => <div style={{ color: 'red' }}> {msg}</div>}
                                </ErrorMessage>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="LastName">LastName</label>
                                <Field type='text' id='lastname' name='lastname' className='form-control' />
                                <ErrorMessage name='lastname'> 
                                    {msg => <div style={{ color: 'red' }}> {msg}</div>}
                                </ErrorMessage>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="email">email</label>
                                <Field type='email' id='email' name='email' className='form-control' />
                                <ErrorMessage name='email'>
                                    {msg => <div style={{ color: 'red' }}> {msg}</div>}
                                </ErrorMessage>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="password">password</label>
                                <Field type='password' id='password' name='password' className='form-control' />
                                <ErrorMessage name='password'>
                                    {msg => <div style={{ color: 'red' }}> {msg}</div>}
                                </ErrorMessage>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="cpassword">password</label>
                                <Field type='password' id='cpassword' name='cpassword' className='form-control' />
                                <ErrorMessage name='cpassword'>
                                    {msg => <div style={{ color: 'red' }}> {msg}</div>}
                                </ErrorMessage>
                            </div>
                            <div className="mb-2">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </Formik>
    )
}

export default Register
