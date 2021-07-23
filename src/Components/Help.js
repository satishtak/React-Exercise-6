import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

function Help({isLogin, isLoginFunction}) {
  let history = useHistory();
  useEffect(() => {
    if(!isLogin) {
      history.push("/home");
    }
  }, [isLogin, history]);

  return (
    <div>
      Help User
    </div>
  )
}

export default Help;
