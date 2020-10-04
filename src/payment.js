import React from 'react';
const payment = () => {
    return <div className="form-container">
        <div className = "form-header">
            <h2>State Machine Payment Form</h2>
        </div>
        <div className="form-body">
            <form>
                <div className="form-group">
                    <label htmlFor = "NameOnCard">Name on card</label>
                    <input type = "text" id = "NameOnCard" className = "form-control" placeholder = "Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor = "CreditCardNumber">Card Number</label>
                    <input type = "text" id = "CreditCardNumber" className = "form-control" placeholder = "Card Number"/>
                </div>
                <button className = "button" id="payNow"> Pay Now</button>
            </form>
        </div>
    </div>
}
export default payment;