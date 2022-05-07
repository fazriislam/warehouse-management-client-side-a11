import { async } from '@firebase/util';
import React, { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialSingUp from '../SocialSingUp/SocialSingUp';

const SignUp = () => {
    const [agree, setAgree] = useState(false);
    const [passError, setPassError] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    const navigate = useNavigate();

    if (loading || sending) {
        return <Spinner animation='border' variant='primary'></Spinner>
    }

    if (error) {
        return;
    }

    // --------------- handler function
    const handleRegistration = async e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const ConfirmPassword = e.target.ConfirmPassword.value;

        if (password.length < 8) {
            const short = <p>Password should contain at least 8 character</p>
            setPassError(short);
            return;
        }
        if (password !== ConfirmPassword) {
            const differentPass = <p>Password Doesn't match</p>
            setPassError(differentPass);
            return;
        }
        await createUserWithEmailAndPassword(email, password);
        await sendEmailVerification(email);
        navigate('/');
    }


    return (
        <div className='border w-50 mt-2 mx-auto p-3'>
            <h2 className='text-primary my-3 mx-auto'>Sign Up</h2>
            <Form onSubmit={handleRegistration}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>
                <p className='text-danger'><small>{passError}</small></p>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name='ConfirmPassword' placeholder="Password" required/>
                </Form.Group>
                    <p className='text-danger'><small>{passError}</small></p>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="Accept terms and condition" />
                </Form.Group>

                <Button disabled={!agree} variant="primary" type="submit" className='w-50 mx-auto btn btn-primary mt-2'>
                    Submit
                </Button>
            </Form>
            <div>
                <p>Already have a account? <Link className='text-primary pe-auto text-decoration-none' to='/signIn'>Sign In</Link>
                </p>
            </div>
            <div>
                <SocialSingUp></SocialSingUp>
            </div>
        </div>
    );
};

export default SignUp;