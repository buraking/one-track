import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ConcertPage from './pages/concert-list/concert-list.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import ArtistPage from './pages/artistpage/artistpage.component';
import SubmitEventPage from './pages/submit-event-page/FormEvent.js';
import Header from './components/header/header.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component{
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }
  
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          this.setState({
            currentUser: {
              id: snapShot.id,
            ...snapShot.data()
            }
          });
        });
      }
      else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
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
          <Route path='/submit-event' component={SubmitEventPage} />
        </Switch>
      </div>
    );
  }
}
export default App;
