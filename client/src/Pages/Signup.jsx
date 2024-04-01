import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import { toast } from 'react-hot-toast';

const getCharacterValidationError = (str) => {
    return (`Your password must have at least 1 ${str}`)
}
const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(5, 'password to short').required('please enter a password').matches(/[0-9]/, getCharacterValidationError('digit')).matches(/[a-z]/, getCharacterValidationError('lowercase')).matches(/[A-Z]/, getCharacterValidationError('uppercase')),
    confirmPassword: Yup.string().required('please retype your password').oneOf([Yup.ref('password')], "password doesnot match"),
    avatar: Yup.string().required('Required')
});

const Signup = () => {
    const inputRef = useRef(null)
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
            avatar: ''
        },

        validationSchema: SignupSchema,
        onSubmit: values => {
            handleRegister(values)
            formik.resetForm()
        }
    })

    const handleRegister = async (inputFields) => {
        try {
            const formData = new FormData();
            formData.append('avatar', inputRef.current.files[0])
            for (let item in inputFields) {
                formData.append(item, inputFields[item])
            }
            const res = await axios.post(`http://localhost:5000/register`, formData)
            const data = await res.data
            if (res.status === 200) {
                //redirect to login after success
                navigate('/login');
                // If registration is successful, show success message
                toast.success(data.msg);
            } else {
                // If registration fails, show error message
                toast.error(data.msg);
            }
        } catch (err) {
            // Handle any errors
            console.log(err);
            // Show generic error message
            toast.error('Registration failed!!! Please try again..');
        }
    }
    return (
        <>
            <div className="container my-3">
                <h1 className='text-center'>REGISTER</h1>
                <div className="row my-5">
                    <div className="col-lg-6">
                        <img className='contact-img' src="https://branch.trexthemes.com/content/images/2023/05/Screenshot-2023-05-14-at-16.45.18.png" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <h2>CREATE ACCOUNT</h2>
                        <form onSubmit={formik.handleSubmit}>
                            <input className='contact-input' type="text" name='fullName' placeholder='Your Name' onChange={formik.handleChange} value={formik.values.fullName} />
                            {formik.touched.fullName && formik.errors.fullName &&
                                <div className='text-danger'>
                                    {formik.errors.fullName}
                                </div>}
                            <input className='contact-input my-4' type="email" name='email' placeholder='Your email address' onChange={formik.handleChange} value={formik.values.email} />
                            {formik.touched.email && formik.errors.email &&
                                <div className='text-danger'>
                                    {formik.errors.email}
                                </div>}
                            <input className='contact-input' type='password' name='password' placeholder='Your password' onChange={formik.handleChange} value={formik.values.password} />
                            {formik.touched.password && formik.errors.password &&
                                <div className='text-danger'>
                                    {formik.errors.password}
                                </div>}
                            <input className='contact-input my-4' type='password' name='confirmPassword' placeholder='Confirm-password' onChange={formik.handleChange} value={formik.values.confirmPassword} />
                            {formik.touched.confirmPassword && formik.errors.confirmPassword &&
                                <div className='text-danger'>
                                    {formik.errors.confirmPassword}
                                </div>}
                            <div className='d-flex align-items-center'>
                                <label htmlFor="avatar">Profile:</label>
                                <input ref={inputRef} className='contact-input' id='avatar' type='file' name='avatar' onChange={formik.handleChange} value={formik.values.avatar} />
                                {formik.touched.avatar && formik.errors.avatar &&
                                    <div className='text-danger'>
                                        {formik.errors.avatar}
                                    </div>}
                            </div>
                            <button type='submit' className='btn btn-dark subscribe py-3 me-0 my-5'>CREATE ACCOUNT</button>
                        </form>
                    </div>
                </div>
                <p className='text-center'><Link to="/" className='my-5' style={{ textDecoration: 'none', color: 'black' }}>BACK TO HOMEPAGE</Link></p>
            </div>
        </>
    )
}

export default Signup