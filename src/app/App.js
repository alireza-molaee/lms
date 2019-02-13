import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from '../pages/home/HomePage';
import EventListPage from '../pages/event-list/EventListPage';
import VideoListPage from '../pages/video-list/VideoListPage';
import EventSinglePage from '../pages/event-single/EventSinglePage';
import VideoSinglePage from '../pages/video-single/VideoSinglePage';
import LoginPage from '../pages/login/LoginPage';
import RegisterPage from '../pages/register/RegisterPage';
import ProfilePage from '../pages/profile/ProfilePage';
import NoMatchPage from '../pages/no-match/NoMatchPage';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/events" component={EventListPage} />
        <Route exact path="/event/:id" component={EventSinglePage} />
        <Route exact path="/videos" component={VideoListPage} />
        <Route exact path="/video/:id" component={VideoSinglePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route component={NoMatchPage} />
      </Switch>
    );
  }
}

export default App;
