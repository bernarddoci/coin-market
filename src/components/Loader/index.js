import React from 'react';
import loaderSrc from '../../assets/spinner.gif';

const Loader = props => (
    <div className="text-center loading-spinner">
        <img
            alt="Loader Icon"
            width="150"
            src={loaderSrc} />
    </div>
);

export default Loader;