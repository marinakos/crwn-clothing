import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem:{ name, imageUrl,price, quantity} }) => (
 <div className='checkout-item'>
     <div className='image-contaneir'>
         <img src={imageUrl} alt='item' />
     </div>
     <span className='name'>{name}</span>
     <span className='quantity'>{quantity}</span>
     <span className='price'>{price}</span>
     <div className='remove-button'>&#9987;</div>

 </div>
 )

export default CheckoutItem;