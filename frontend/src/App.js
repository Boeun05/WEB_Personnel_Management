import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import AttendanceContainer from './pages/Attendance/AttendanceContainer';
import Payroll from './pages/Payroll/Payroll';
import Work from './pages/Work/Work';
import Evaluation from './pages/Evaluation/Evaluation';
import PersonnelInformationContainer from './pages/PersonnelInformation/PersonnelInformationContainer';
import PersonnelStatus from './pages/PersonnelStatus/PersonnelStatus';
import Profile from './pages/Profile/Profile';
import styles from './app.module.css';
import { ThemeProvider } from 'styled-components';
import React, { useEffect, useState } from 'react';
import AuthRoute from './AuthRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    let token = localStorage.getItem('token');
    setToken(token);
    if (token) {
      setIsAuthenticated(true);
    } else {
      setToken(null);
      setIsAuthenticated(false);
    }
  }, [token]);

  if (isAuthenticated === null) {
    return <></>;
  }

  const removeToken = () => {
    setToken(null);
  };

  const addToken = () => {
    setToken(localStorage.getItem('token'));
  };

  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: '#0081cc',
          red: '#b53737',
          grey: '#BEBEBE',
          darkgrey: '#7e7e7e',
          green: '#76ba1b',
        },
      }}
    >
      <div>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Login addToken={addToken} />}
            />
            <Route
              exact
              path="*"
              component={() => (
                <div className={styles.app}>
                  <div className={styles.sidebar}>
                    <Sidebar />
                  </div>
                  <div className={styles.body}>
                    <Header removeToken={removeToken} />
                    <AuthRoute
                      path="/attendance"
                      component={AttendanceContainer}
                      isAuthenticated={isAuthenticated}
                    />
                    <AuthRoute
                      path="/payroll"
                      isAuthenticated={isAuthenticated}
                      component={Payroll}
                    />
                    <AuthRoute
                      path="/work"
                      isAuthenticated={isAuthenticated}
                      component={Work}
                    />
                    <AuthRoute
                      path="/evaluation"
                      isAuthenticated={isAuthenticated}
                      component={Evaluation}
                    />
                    <AuthRoute
                      path="/personnelInformation"
                      isAuthenticated={isAuthenticated}
                      component={PersonnelInformationContainer}
                    />
                    <AuthRoute
                      path="/personnelStatus"
                      isAuthenticated={isAuthenticated}
                      component={PersonnelStatus}
                    />
                    <AuthRoute
                      path="/profile"
                      isAuthenticated={isAuthenticated}
                      component={Profile}
                    />
                  </div>
                </div>
              )}
            />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
