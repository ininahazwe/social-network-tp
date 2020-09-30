import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import ServiceContext from '../ServiceContext';
import { LoginInput } from './Login.elements';
import { Nav } from './Profile.elements';
import { Container } from '../Global.elements';

export default class Register extends React.Component {

    static contextType = ServiceContext;

    state = {
        email: '',
        username: '',
        firstname: '',
        lastname: '',
        password: '',
        confirmPassword: ''
    }

    handleChangeEmail = (text) => {
        this.setState({
            email: text
        })
    }

    handleChangeUsername = (text) => {
        this.setState({
            username: text
        })
    }

    handleChangeFirstname = (text) => {
        this.setState({
            firstname: text
        })
    }

    handleChangeLastname = (text) => {
        this.setState({
            lastname: text
        })
    }

    handleChangePassword = (text) => {
        this.setState({
            password: text
        })
    }

    handleChangeConfirmPassword = (text) => {
        this.setState({
            confirmPassword: text
        })
    }

    handleConfirm = () => {
        const user = this.context.userService.create(this.state.firstname, this.state.lastname, this.state.email, this.state.username, this.state.password);
        if (user != null) {
            this.props.changeScreen('Login')();
        }
    }

    render() {
        /**
         * EMAIL
         * USERNAME = NICKNAME
         * FIRSTNAME
         * LASTNAME
         * PASSWORD
         * CONFIRM_PASSWORD
         */
        return (
            <Container>
                <Username>Register</Username>
                <LoginInput value={this.state.email} onChangeText={this.handleChangeEmail} placeholder='email' />
                <LoginInput value={this.state.username} onChangeText={this.handleChangeUsername} placeholder='nom d,utilisateur' />
                <LoginInput value={this.state.firstname} onChangeText={this.handleChangeFirstname} placeholder='nom' />
                <LoginInput value={this.state.lastname} onChangeText={this.handleChangeLastname} placeholder='prénom' />
                <LoginInput secureTextEntry={true} value={this.state.password} onChangeText={this.handleChangePassword} placeholder='mot de passe' />
                <LoginInput secureTextEntry={true} value={this.state.confirmPassword} onChangeText={this.handleChangeConfirmPassword} placeholder='confirmation mot de passe' />
                <Nav>
                    <TouchableOpacity style={styles.btnlog2} title="Retour"  onPress={this.props.changeScreen('Login')}>
                    <Text style={styles.textbtn2}>Retour</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnlog} title="Valider"  onPress={this.handleConfirm}>
                    <Text style={styles.textbtn}>Valider</Text>
                    </TouchableOpacity>
                </Nav>                
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
    btnlog2: {
        backgroundColor: '#adb5bd',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: 'auto',
        borderRadius: 5,
        margin: 5,
      },
    textbtn: {
        color: '#fff',
    }
  });
  

