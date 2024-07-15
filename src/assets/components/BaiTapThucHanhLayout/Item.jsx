// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const Item = ({ icon, title, description }) => {
    return (
        <div className="col-lg-6 col-xxl-4 mb-5">
            <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                    <div className={`feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4`}>
                        <i className={`bi ${icon}`}></i>
                    </div>
                    <h2 className="fs-4 fw-bold">{title}</h2>
                    <p className="mb-0">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Item;
