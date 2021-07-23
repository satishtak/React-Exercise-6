import React, { useState } from 'react';
import { Tab, Tabs, TabList } from 'react-tabs';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'react-tabs/style/react-tabs.css';

import Home from './Components/Home';
import Confidential from './Components/Confidential';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Help from './Components/Help';
import Main from './CommonComponent/Main';

import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [defaultTab, setDefaultTab] = useState(0);

  const isLoginFunction = () => {
    setIsLogin(!isLogin);
  }

  return (
    <div className="App">
      <Router>
        <Tabs selectedIndex={defaultTab}>
          <TabList>
            <Tab>
              <Link to="/home" activeClassName="selected" onClick={() => setDefaultTab(0)}>Home</Link>
            </Tab>
            <Tab>
              <Link to="/confidential" activeClassName="selected" onClick={() => setDefaultTab(1)}>Confidential</Link>
            </Tab>
            {isLogin ? (
              <>
                <Tab>
                  <Link to="/logout" activeClassName="selected" onClick={() => setDefaultTab(2)}>Logout</Link>
                </Tab>
                <Tab>
                  <Link to="/help" activeClassName="selected" onClick={() => setDefaultTab(3)}>Help</Link>
                </Tab>
              </>
            ) : (
              <Tab>
                <Link to="/login" activeClassName="selected" onClick={() => setDefaultTab(2)}>Login</Link>
              </Tab>
            )}
          </TabList>
        </Tabs>
        <Switch>
          <Route path={'/home'} component={() => <Home isLogin={isLogin} isLoginFunction={() => isLoginFunction()} setDefaultTab={setDefaultTab} />} />
          <Route path={'/confidential'} component={() => <Confidential isLogin={isLogin} isLoginFunction={() => isLoginFunction()} setDefaultTab={setDefaultTab} />} />
          <Route path={'/login'} component={() => <Login isLogin={isLogin} isLoginFunction={() => isLoginFunction()} setDefaultTab={setDefaultTab} />} />
          <Route path={'/logout'} component={() => <Logout isLogin={isLogin} isLoginFunction={() => isLoginFunction()} setDefaultTab={setDefaultTab} />} />
          <Route path={'/help'} component={() => <Help isLogin={isLogin} isLoginFunction={() => isLoginFunction()} setDefaultTab={setDefaultTab} />} />
        </Switch>
      </Router>
      <Main />
    </div>
  );
}

export default App;
