
import React, {useContext, useEffect, useState} from 'react';
import CartContext from '../../store/cart-context';  //here we need CartContext (all data) itself
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = (props) =>{
    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false)
    const cartCtx = useContext(CartContext); //HeaderCartButton will reevalute whenever CartContext will change
    const {items} = cartCtx
    const numberOfCartNumbers = items.reduce((curNumber, item)=>{
        return curNumber + item.amount;
    }, 0)

   ;

    const btnClasses = `${classes.button} ${buttonIsHighlighted ? classes.bump : ''}`;

    useEffect(()=>{
        if(items.length === 0){
            return
        }
        setButtonIsHighlighted(true);

        const timer = setTimeout(()=>{
            setButtonIsHighlighted(false);
        }, 300);
        return () =>{   //cleanUp function. Automtically in useEffect
            clearTimeout(timer);
        }
    }, [items])



    return (
      <button className={btnClasses}
              onClick={props.onClick}
      >
          <span className={classes.icon}>
              <CartIcon/>
          </span>
          <span>Your cart</span>
          <span className={classes.badge}>
              {numberOfCartNumbers}
          </span>
      </button>

    )
}

export default HeaderCartButton
