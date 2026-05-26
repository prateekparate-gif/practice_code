import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Redirect to="/dashboard" /> : <LoginPage onLogin={handleLogin} />}
        </Route>
        <Route path="/dashboard">
          {user ? <Dashboard user={user} onLogout={handleLogout} /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;