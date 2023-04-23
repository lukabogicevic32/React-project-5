import React, { useContext } from 'react';

import classes from './Navigation.module.css';
import AuthContext from '../../store/auth-context';

const Navigation = () => {
  const ctx = useContext(AuthContext);
    //ako koristimo consumer on treba da sadrzi child koji ce da bude funkction
    // <AuthContext.Consumer>
    //  {(ctx) => {
      return (
       <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
          //props za prosleđivanje podataka komponentama, ako imamo nešto što želimo da prosledimo kroz mnogo komponenti i prosleđujemo komponenti koja radi nešto specifično, onda koristimo kontekst 
        )}
      </ul>
    </nav>
      );
     }   
    // </AuthContext.Consumer>

export default Navigation;
