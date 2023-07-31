import React, {useState} from 'react'
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
//import classes from './App.module.css';
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider';

function App() {
    const [cartIsShown, setCartIsShown] = useState(false)
    const showCartHandler = () =>{
        setCartIsShown(true)
    }
    const hideCartHandler = () =>{
        setCartIsShown(false)
    }

  return (
    <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler}/>}
        <Header onShowCart = {showCartHandler}/>
        <main>
            <Meals></Meals>


            {/*<div className={classes.wrapper}>*/}
            {/*    <svg>*/}
            {/*        <text x="50%" y="50%" dy=".35em" text-anchor="middle">*/}
            {/*            CSS Portal XXX*/}
            {/*        </text>*/}
            {/*    </svg>*/}
            {/*</div>*/}

        </main>
    </CartProvider>
  );
}

export default App;
