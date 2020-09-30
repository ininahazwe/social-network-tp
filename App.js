import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Forgot from './screens/Forgot';
import Friends from './screens/Friends';
import Login from './screens/Login';
import Profile from './screens/Profile';
import Register from './screens/Register';
import { Container } from './Global.elements';

export default class App extends React.Component {

    state = {
        nomEcran: 'Login',
        connectedUser: null
    }

    handleChangeScreen = (pageEnQuestion) => () => {
        this.setState({
            nomEcran: pageEnQuestion
        });
    }

    handleConnect = (user) => {
        this.setState({
            connectedUser: user
        })
    }

    render() {
        let ecran = null;
        if (this.state.nomEcran == 'Login') {
            ecran = (<Login changeScreen={this.handleChangeScreen} changeUser={this.handleConnect} />);
        } else if (this.state.nomEcran == 'Forgot') {
            ecran = (<Forgot changeScreen={this.handleChangeScreen} />);
        } else if (this.state.nomEcran == 'Friends') {
            ecran = (<Friends currentUser={this.state.connectedUser} changeScreen={this.handleChangeScreen} />);
        } else if (this.state.nomEcran == 'Profile') {
            ecran = (<Profile currentUser={this.state.connectedUser} changeScreen={this.handleChangeScreen} />);
        } else if (this.state.nomEcran == 'Register') {
            ecran = (<Register changeScreen={this.handleChangeScreen} />);
        } else {
            ecran = null;
        }
        return (
            <Container>
                {ecran}
            </Container>
          );
    }
}