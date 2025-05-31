import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

function Checkout() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div>
      <Header />
      <h1 className='checkout-title'>Checkout</h1>
      
      <div className='checkout-content'>
        <p>Thank you for shopping with us!</p>
        <p>Your order will be processed shortly.</p>
        <button 
          className='back-to-home'
          onClick={handleBackToHome}
        >
          Back to Home
        </button>
      </div>
    </div>
  )
}

export default Checkout
