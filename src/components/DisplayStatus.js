import React from 'react';

function DisplayStatus({type, message}) {

    return(
        <>
            {message && <div style={{ border: '2px solid #333', padding: '10px', margin: '20px' }}>{message}</div>}
        </>
    );
};

export default DisplayStatus;