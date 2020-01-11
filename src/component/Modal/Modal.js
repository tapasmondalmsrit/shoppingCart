import React from 'react';

import './Modal.css';

const modal = (props) => {
    return (
        <div>
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    display: props.show ? 'block' : 'none'
                }}>
                <div className="modal-header">
                    <h3>Shopping Details</h3>
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div>
                <div className="modal-body">
                    {props.qty < 1 &&
                        <h2>Your Shopping Cart is empty.</h2>
                    }
                    {props.qty > 0 &&
                        <div>
                            <h2 style={{ color: "green" }}>Thank you for shoppin with us</h2>
                            <p>Total Items: {props.qty}</p>
                            <p>Total Payable: ₹{props.total}</p>
                        </div>
                    }
                </div>
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={props.close}>Shopping More</button>
                    <button className="btn-continue" onClick={props.close}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default modal;
