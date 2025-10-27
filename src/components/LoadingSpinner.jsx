// =============================================
// Loading Spinner Component
// Author: ushivakumar855
// Date: 2025-10-10
// =============================================

import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingSpinner = ({ message = 'Loading...' }) => {
    return (
        <div className="text-center my-5">
            <Spinner animation="border" role="status" variant="primary">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            <p className="mt-3 text-muted">{message}</p>
        </div>
    );
};

export default LoadingSpinner;
