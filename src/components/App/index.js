import React from 'react';
import firebase from 'firebase/app';
import fbConnection from '../../helpers/data/connection';
import Home from '../Views/Home';
import PatchFBTeamKeys from '../../helpers/data/patchFBKeys';

fbConnection();
PatchFBTeamKeys();

class App extends React.Component {
  state = {
    user: null,
  };

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <Home user={user}/>
      </div>
    );
  }
}

export default App;
