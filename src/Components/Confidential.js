import React from 'react'
import { useHistory } from "react-router-dom";

function Confidential({isLogin, isLoginFunction, setDefaultTab}) {
  let history = useHistory();

  const login = () => {
    isLoginFunction();
    setDefaultTab(0);
    history.push("/home");
  }

  return (
    <div>
      {isLogin ? (
        <>
          This page shows the confidentail information which cannot be shared with anyone.
        </>
      ) : (
        <>
          You don't have access to this content, please login to view
          <button onClick={login}>Login</button>
        </>
      )}
    </div>
  )
}

export default Confidential;
