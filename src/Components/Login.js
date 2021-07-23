import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";

function Login({isLogin, isLoginFunction, setDefaultTab}) {
  let history = useHistory();

  useEffect(() => {
    if(isLogin) {
      history.push("/home");
    }
  }, [isLogin, history]);

  const login = () => {
    isLoginFunction();
    setDefaultTab(0);
    history.push("/home");
  }

  return (
    <div>
      Click below button to login.
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login;
