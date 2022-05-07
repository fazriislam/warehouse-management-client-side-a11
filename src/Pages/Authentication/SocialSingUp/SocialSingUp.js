import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialSingUp = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    if (loading) <Spinner animation='border' variant='primary'></Spinner>;
    if (user) navigate(from, { replace: true });

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <div className=''>
                <Button onClick={() => signInWithGoogle()} className=' d-block w-50 mx-auto my-2'>
                    <span className='px-2'>Google Sign In</span>
                </Button>
            </div>
        </div>
    );
};

export default SocialSingUp;