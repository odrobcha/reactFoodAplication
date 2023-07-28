import React from 'react'
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
//import classes from './App.module.css';

function App() {
  return (
    <React.Fragment>
        <Header/>
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
    </React.Fragment>
  );
}

export default App;
