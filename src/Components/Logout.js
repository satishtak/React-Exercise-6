import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";

function Logout({isLogin, isLoginFunction, setDefaultTab}) {
  let history = useHistory();

  useEffect(() => {
    if(!isLogin) {
      history.push("/home");
    }
  }, [isLogin, history]);


  const logout = () => {
    isLoginFunction();
    setDefaultTab(0);
    history.push("/home");
  }

  return (
    <div>
      Click below button to logout.
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Logout;
