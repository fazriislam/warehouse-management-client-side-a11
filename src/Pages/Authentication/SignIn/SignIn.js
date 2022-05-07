import { async } from '@firebase/util';
import React from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialSingUp from '../SocialSingUp/SocialSingUp';

const SignIn = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    if (loading) {
        return <Spinner animation='border' variant='primary'></Spinner>
    }
    if (error) {
        return;
    }

    // --------------handler function
    const handleSignIn = async e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        await signInWithEmailAndPassword(email, password);
        navigate(from, { replace: true });
    }

    return (
        <div className='border w-50 mt-2 mx-auto p-3'>
            <h2 className='text-primary my-3 mx-auto'>Sign In</h2>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                    <p className='text-danger'><small>{error?.message}</small></p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                    <p className='text-danger'><small>{error?.message}</small></p>
                </Form.Group>
                <Button variant="primary" type="submit" className='w-50 mx-auto btn btn-primary mt-2'>
                    Submit
                </Button>
            </Form>
            <div>
                <SocialSingUp />
            </div>
        </div>
    );
};

export default SignIn;