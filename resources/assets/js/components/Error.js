import React from 'react';
import {Link} from 'react-router-dom';

const Error = () => (
    <div>
        404!! <Link to={`/`}>Go Home</Link>
    </div>
);

export default Error;