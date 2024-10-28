import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import TopPics from '../TopPics/TopPics';

const CheckOut = () => {
  const { setItems } = useCart();
  const navigate = useNavigate();

  const [paymentDetailsFilled, setPaymentDetailsFilled] = useState(false);

  const handleInputChange = () => {
  
    const cardNumber = document.getElementById('cardNumber').value;
    const nameOnCard = document.getElementById('nameOnCard').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvvCode = document.getElementById('cvvCode').value;

    if (cardNumber && nameOnCard && expiryDate && cvvCode) {
      setPaymentDetailsFilled(true);
    } else {
      setPaymentDetailsFilled(false);
    }
  };

  const completePayment = () => {
    if (!paymentDetailsFilled) {
      alert('Please fill in all payment details.');
      return;
    }

    setItems([]);

    navigate('/successpayment');
  };

  return (
    <section className='payment-section'>
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center flex-column">
          <h1 className="h3 mb-5 text-center my-5">Payment</h1>
          <div className="col-lg-9">
            <div className="accordion" id="accordionPayment">
              {/* Kredit carti*/}
              <div id='pay-1' className="accordion-item mb-3">
                <h2 className="h5 px-4 py-3 accordion-header d-flex justify-content-between align-items-center">
                  <div className="form-check w-100 collapsed" data-bs-toggle="collapse" data-bs-target="#collapseCC" aria-expanded="false">
                    <input className="form-check-input" type="radio" name="payment" id="payment1" onChange={handleInputChange} />
                    <label className="form-check-label pt-1" htmlFor="payment1">
                      <h4>Credit Cart</h4>
                    </label>
                  </div>
                  <span>
                    <svg width={34} height={25} xmlns="http://www.w3.org/2000/svg">
                      {/* SVG kontenti */}
                    </svg>
                  </span>
                </h2>
                <div id="collapseCC" className="accordion-collapse collapse show" data-bs-parent="#accordionPayment">
                  <div className="accordion-body">
                    <div className="mb-3">
                      <label className="form-label">Card Number</label>
                      <input type="text" className="form-control" id="cardNumber" onChange={handleInputChange} />
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Name on card</label>
                          <input type="text" className="form-control" id="nameOnCard" onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="mb-3">
                          <label className="form-label">Expiry date</label>
                          <input type="text" className="form-control" id="expiryDate" placeholder="MM/YY" onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="mb-3">
                          <label className="form-label">CVV Code</label>
                          <input type="password" className="form-control" id="cvvCode" onChange={handleInputChange} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
               {/* PayPal */}
              <div id='pay-2' className="accordion-item mb-3 border">
                <h2 className="h5 px-4 py-3 accordion-header d-flex justify-content-between align-items-center">
                  <div className="form-check w-100 collapsed" data-bs-toggle="collapse" data-bs-target="#collapsePP" aria-expanded="false">
                    <input className="form-check-input" type="radio" name="payment" id="payment2" onChange={handleInputChange} />
                    <label className="form-check-label pt-1" htmlFor="payment2">
                      <h4>PayPal</h4>
                    </label>
                  </div>
                  <span>
                    <svg width={103} height={25} xmlns="http://www.w3.org/2000/svg">
                      {/* SVG kontenti */}
                    </svg>
                  </span>
                </h2>
                <div id="collapsePP" className="accordion-collapse collapse" data-bs-parent="#accordionPayment">
                  <div className="accordion-body">
                    <div className="px-2 col-lg-6 mb-3">
                      <label className="form-label">Email address</label>
                      <input type="email" className="form-control" onChange={handleInputChange} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button id='btn-paypal' className='payment-btn my-5' onClick={completePayment} disabled={!paymentDetailsFilled}>
            Complete the payment
          </button>
          <TopPics/>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;