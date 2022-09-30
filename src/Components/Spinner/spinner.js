import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

let SpinnerImage = () => {
    return (
        <React.Fragment>
            <div>
            <Spinner animation="border" variant="dark" className='d-block m-auto'/>
            </div>
        </React.Fragment>
    )
};

export default SpinnerImage;