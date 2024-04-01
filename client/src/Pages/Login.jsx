import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const getCharacterValidationError = (str) => {
    return (`Your password must have at least 1 ${str}`)
}

const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(5, 'password to short').required('please enter a password').matches(/[0-9]/, getCharacterValidationError('digit')).matches(/[a-z]/, getCharacterValidationError('lowercase')).matches(/[A-Z]/, getCharacterValidationError('uppercase')),
})
function Login() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },

        validationSchema: loginSchema,

        onSubmit: values => {
            handleLogin(values)
        }
    })

    const handleLogin = async (inputLogin) => {
        const loginRes = await axios.post(`http://localhost:5000/login`, inputLogin)
        const data = await loginRes.data
        if (loginRes.status === 200) {
            //redirect to home after success
            navigate('/');
            // If login is successful, show success message
            toast.success(data.msg + '. Please login');
        } else {
            // If login fails, show error message
            toast.error(data.msg);
        }
    }
    return (
        <>
            <div className="container my-3">
                <h1 className='text-center'>LOGIN</h1>
                <div className="row my-5">
                    <div className="col-lg-6 col-sm-12 col-md-6">
                        <img className='contact-img img-fluid' src="https://branch.trexthemes.com/content/images/2023/05/Screenshot-2023-05-14-at-16.45.18.png" alt="" />
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-6 mt-4">
                        <h2>WELCOME BACK!</h2>
                        <form onSubmit={formik.handleSubmit}>
                            <input className='contact-input my-2' name='email' type="email" placeholder='Your email address' onChange={formik.handleChange} value={formik.values.email} />
                            {formik.touched.email && formik.errors.email &&
                                <div className='text-danger'>
                                    {formik.errors.email}
                                </div>}
                            <input className='contact-input my-2' name='password' type="password" placeholder='Your password' onChange={formik.handleChange} value={formik.values.password} />
                            {formik.touched.password && formik.errors.password &&
                                <div className='text-danger'>
                                    {formik.errors.password}
                                </div>}
                            <button type='submit' className='btn btn-dark subscribe py-3 ms-0 my-2'>LOGIN</button>
                        </form>

                        <p>Don't have an account yet? <Link to="/signup">signup</Link></p>
                    </div>
                </div>
                <Link to="/" className='my-5' style={{ textDecoration: 'none', color: 'black' }}>BACK TO HOMEPAGE</Link>
            </div>

        </>
    )
}

export default Login
