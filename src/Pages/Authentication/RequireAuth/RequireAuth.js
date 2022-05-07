import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const RequireAuth = ({ children }) => {
    const [sendEmailVerification] = useSendEmailVerification(auth);
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) <Spinner animation='border' variant='primary'></Spinner>

    if (!user) {
       return <Navigate to='/signIn' state={{ from: location }} replace></Navigate>
    }

    if (!user?.emailVerified) {
        return (
            <div className='w-50 my-5 mx-auto'>
                <h2 className='text-danger'>Your Email is not verified</h2>
                <Button onClick={async () => sendEmailVerification()} variant="primary">Verify your email</Button>
            </div>
        )
    }
    return children;
};

export default RequireAuth;