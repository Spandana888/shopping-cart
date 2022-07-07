import React from 'react';

const cart = () => {
  
  return (
    <div className="modal-content">
      <div className="modal-header">
        <p className="modal-title">My Cart</p>
        <button type="button" className="close" data-dismiss="modal">&times;</button>
      </div>
      <div className="modal-body">
       <div className="empty-cart">
          <h2>No items in your cart</h2>
          <p>Your favourite are just a click away</p>
       </div>
       <div className="full-cart">
          <img src="#" alt="lowest-price-ever"></img>
          <span>You won't find it cheaper anywhere</span>
       </div>
      </div>
      <div className="modal-footer">
        <div className="empty-cart">
        <button type="button" className="btn modal-close" data-dismiss="modal">Start Shopping</button>
       </div>
       <div className='full-cart'>
         <p>Promo code can be applied on payment page</p>
         <button type="button" className="btn modal-close" data-dismiss="modal">Procced to checkout<span>Rs.187</span></button>
       </div>
      </div>
    </div>
  )
}

export default cart