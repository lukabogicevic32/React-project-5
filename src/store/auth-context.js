import React, {useState, useEffect} from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {}, /* dummy function, nista ne radi */
    onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const userInformation = localStorage.getItem('isLoggedIn');
        if (userInformation === '1') {
          setIsLoggedIn(true);
        };
      }, []);

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };
    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };


  return <AuthContext.Provider
   value={
   {isLoggedIn: isLoggedIn,
   onLogout: logoutHandler,
   onLogin: loginHandler
   }}
   >
   {props.children}
  </AuthContext.Provider>
};
//prosp za configuration, context za state managment acroos compoentns or accrosed entire app high frequency changes vise promjena u sekundi
export default AuthContext;