import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

export default class Forgot extends React.Component {

    state = {
        email: ''
    }

    handleChangeEmail = (text) => {
        this.setState({
            email: text
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Forgot</Text>
                <TextInput value={this.state.email} onChangeText={this.handleChangeEmail} />
                <Button title="Retour"  onPress={this.props.changeScreen('Login')} />
                <Button title="Valider"  onPress={this.props.changeScreen('Login')} />
            </View>
          );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
