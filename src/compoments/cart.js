import React from 'react';
import { useCart } from "react-use-cart";
import lowestPriceImage  from "../static/images/lowest-price.png";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { isEmpty, items, totalItems,  cartTotal, updateItemQuantity, removeItem  } = useCart();
  const navigate = useNavigate();
  const startShopping = () => {
    navigate("/products");
 };
  return (
    <div className="modal-content">
      <div className="modal-header">
        <p className="modal-title">My Cart ({totalItems} Items)</p>
        <button type="button" className="close" data-dismiss="modal">&times;</button>
      </div>
      <div className={isEmpty ? 'displayNone' : ' '}>
        <div className='modal-body'>
        {items.map((item, index)=>{
            return(
             <div className="new-item" key={index}>
                 <img src={item.imageURL} alt={item.name} />
                 <div className="item-count">
                    <p>{item.name}</p>
                    <button role="button" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{ item.quantity }</span>
                    <button role="role" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                    <span className='remove-item' onClick={() => removeItem(item.id)}>X</span>
                  </div>
                  <span>Rs.{(item.price)}</span>
              </div>
            )
          })}
          <div className="lowest-price">
            <img src={ lowestPriceImage  } alt="lowest-price-ever"></img>
            <span>You won't find it cheaper anywhere</span>
          </div>
        </div>
        <div className="modal-footer">
         <p>Promo code can be applied on payment page</p>
         <button type="button" className="btn modal-close" data-dismiss="modal">Procced to checkout<span> Rs.{cartTotal}</span></button>
        </div>
      </div>
      <div className={!isEmpty ? 'displayNone' : ''}>
        <div className='modal-body'>
          <h2>No items in your cart</h2>
          <p>Your favourite are just a click away</p>
        </div>
        <div className="modal-footer">
           <button type="button" onClick={() => startShopping()} className="btn modal-close" data-dismiss="modal">Start Shopping</button>
      </div>
     </div>
    </div>
  )
}

export default Cart