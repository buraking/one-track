import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ConcertPage from './pages/concert-list/concert-list.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import ArtistPage from './pages/artistpage/artistpage.component';
import Header from './components/header/header.component.jsx';


class App extends React.Component{
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }
  
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/concert-list' component={ConcertPage}/>
          <Route path='/signin' component={SignInAndSignUpPage}/>
          <Route path='/profile' component={ArtistPage} />
        </Switch>
      </div>
    );
  }
}
export default App;
