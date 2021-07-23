import { useState } from 'react';

function IsLoginFunc() {
  const [isLogin, setIsLogin] = useState(false);
  console.log('in2', isLogin);
  const isLoginFunction = () => {
    console.log('in');
    setIsLogin(!isLogin);
  }
  // const bind = {
  //   isLogin,
  //   onClick: () => {
  //     isLoginFunction();
  //   }
  // };

  return [isLogin, isLoginFunction];
}

export default IsLoginFunc;
