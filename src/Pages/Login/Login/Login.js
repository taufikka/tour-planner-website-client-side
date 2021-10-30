import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

import './Login.css'
const Login = () => {
    const { logInUsingGoogle } = useAuth();

    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || '/'

    const handleGoogleLogIn = () => {
        logInUsingGoogle()
            .then((result) => {
                history.push(redirect_url)
            })
    }

    return (
        <>
            <div className="login-container my-3">
                <div className="d-flex justify-content-center">
                    <div className="login-form border p-5">
                        <button type="button" className="w-100 rounded-pill btn btn-outline-success" variant="outlined" onClick={handleGoogleLogIn}>
                            <img className="google-image" src="https://cdn-icons-png.flaticon.com/128/2702/2702602.png" alt="" />&nbsp;&nbsp; <span>Continue with Google</span>
                        </button>
                        <br /> <br />

                        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="w-100 rounded-pill btn btn-outline-success" variant="outlined" onClick={''}>
                            <img className="google-image" src="https://cdn-icons-png.flaticon.com/512/733/733609.png" alt="" />&nbsp;&nbsp; <span>Continue with GitHub</span>
                        </button>

                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Important notice!</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        This feature will available soon...
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Ok</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Login;

/*
<!-- Button trigger modal -->
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
*/