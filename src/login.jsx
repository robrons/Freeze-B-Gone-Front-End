// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import ButtonAppBar from 'ButtonAppBar.jsx'

// Configure Firebase.
const config = {
  apiKey: 'AIzaSyCNhKNfvK9_lU7h0ntDR5-PgQRMO0Ukn80',
  authDomain: 'freeze-b-gone-auth.firebaseapp.com',
  // ...
};

firebase.initializeApp(config);

export default class SignInScreen extends React.Component {

  constructor() {
    super()
    // The component's Local state.
    this.state = {
      signedIn: false // Local signed-in state.
    };

    // Configure FirebaseUI.
    this.uiConfig = {
      // Popup signin flow rather than redirect flow.
      // We will display Google and Facebook as auth providers.
        signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        // Avoid redirects after sign-in.
        signInSuccess: () => false
      }
    };
  }

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    firebase.auth().onAuthStateChanged(
      (user) => this.setState({ signedIn: !!user })
    );
  }

  render() {
    if (!this.state.signedIn) {
      return (
        <div>
          <ButtonAppBar />
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
        </div>
      );
    }
    return (
      <div>
        <h1>My App</h1>
        <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
        <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
      </div>
    );
  }
}

