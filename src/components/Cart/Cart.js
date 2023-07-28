import React from 'react';
import classes from './Cart.module.css';

const Cart = (props) => {
    const cartItems = <ul className={classes['cart-items']}>
        {[{ id: c1, name: 'Sushi', amount: 2, price: 12.99 }].map(item => {
            return <li>{item.name}</li>;
        })}
    </ul>;

    return (
      <div>
          {cartItems}
          <div className={classes.total}>
              <span>Total Amount</span>
              <spam>35.64</spam>
          </div>
          <div className={classes.actions}>
              <button className={classes['button--alt']}>Close</button>
              <button className={classes.button}>Order</button>

          </div>
      </div>
    );

};