import React from 'react';
import { useContext } from 'react';
import { AuthContext } from './LoginForm';
import DisplayStatus from './DisplayStatus';

// Consuming the Context Value
function AuthMessage() {
    const { message, validUser } = useContext(AuthContext);

    return (
        <div>
            { message && (
                <DisplayStatus type={validUser ? 'success' : 'error'} message={message} />
            )}
        </div>
    );
}

export default AuthMessage;