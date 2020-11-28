# Sports Roster
This was an optional assignment to get extra practice with CRUD in React.js. It was to be a quick application to where any authenticated user could adjust a teams roster with new players, delete and edit current players on the team.

## The Motivation
The motivation for me was to practice CRUD functionality in React before beginning my capstone project. I had some free time from school and work over thanksgiving break so I figured I would give this a shot

## Screenshot
![screencapture-localhost-3000-2020-11-26-14_47_07](https://user-images.githubusercontent.com/66916708/100390712-f98a9000-2ff6-11eb-96a6-46d0d4145eb3.png)

## Deployed Site
[Deployed Link](https://sports-roster.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/fabb42f7-2bce-444f-9caa-65a251cc7bd8/deploy-status)](https://app.netlify.com/sites/sports-roster/deploys)

## Features
User can authenticate with Google
User can create players
User can delete players
User can edit players

## Tech/Framework
React.js

## Code Style
eslintrc and React.strictmode

## Code Example
```
  handleSubmit = (e) => {
    e.preventDefault();
    this.btn.setAttribute('disabled', 'disabled');
    if (this.state.firebaseKey === '') {
      createPlayer(this.state).then(() => {
        this.props.onUpdate?.();
        this.setState({ success: true });
      });
    } else {
      updatePlayer(this.state).then(() => {
        this.props.onUpdate?.(this.props.player.firebaseKey);
        this.setState({ success: true });
      });
    }
  };
  ```

