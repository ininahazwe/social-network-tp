import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import ServiceContext from '../ServiceContext';
import { Container } from '../Global.elements';
import { Title, LoginInput, Bienvenue, Introduction } from './Login.elements';

export default class Login extends React.Component {

    static contextType = ServiceContext;

    state = {
        username: '',
        password: ''
    }

    handleChangeUsername = (text) => {
        this.setState({
            username: text
        })
    }

    handleChangePassword = (text) => {
        this.setState({
            password: text
        })
    }

    handleLogin = () => {
        const user = this.context.userService.authorize(this.state.username, this.state.password);
        if (user != null) {
            this.props.changeUser(user);
            this.props.changeScreen('Profile')();
        }
    }

    render() {
        return (
            // class="container" => style={styles.container}
            <Container>
                <Bienvenue>Bienvenue dans</Bienvenue>
                <Title>TeamChat</Title>
                <Introduction>Transmettez en un éclair vos informations à l'ensemble de l'équipe de votre entreprise</Introduction>
                <LoginInput placeholder="Username ..." value={this.state.username} onChangeText={this.handleChangeUsername} />
                <LoginInput placeholder="Password ..." secureTextEntry={true} value={this.state.password} onChangeText={this.handleChangePassword} />
                <TouchableOpacity style={styles.btnlog} title="S'identifier"  onPress={this.handleLogin}>
                  <Text style={styles.textbtn}>Connexion</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnlog} title="S'enregistrer"  onPress={this.props.changeScreen('Register')}>
                  <Text style={styles.textbtn}>S'enregistrer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnlog2} title="Forgot"  onPress={this.props.changeScreen('Forgot')}>
                  <Text style={styles.textbtn2}>Mot de passe oublié ?</Text>
                </TouchableOpacity>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    btnlog: {
      backgroundColor: '#006d77',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      width: 'auto',
      borderRadius: 5,
      margin: 5,
    },
    textbtn: {
        color: '#fff',
    },
    btnlog2: {
        backgroundColor: '#adb5bd',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: 'auto',
        borderRadius: 5,
        margin: 5,
      },
  });
  
