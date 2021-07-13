import React from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/login/Login';
import TweetBody from './pages/twitter/TweetBody';
import Body from './pages/twitter/Body';

function App() {
    const userExists = localStorage.getItem('user');
    const isAuthenticated = userExists;
    return (
        <div className="app">
            <div className="app_body">
                <Switch>
                    <Route exact path={'/'}>
                        <Redirect
                            to={isAuthenticated ? '/twitter' : '/login'}
                        ></Redirect>
                    </Route>
                    <Route path={'/login'} component={LoginPage} />
                    <Route path={'/twitter'} component={Body} />
                    <Route path={'/twitterReplyFeed'} component={TweetBody} />
                </Switch>
            </div>
        </div>
    );
}

export default App;
