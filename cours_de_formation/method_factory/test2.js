/**
 * Version 2
 */

const { View } = require("react-native");

handleChangeScreenLogin = () => {
    this.setState({
        nomEcran: 'Login'
    });
}

handleChangeScreenProfile = () => {
    this.setState({
        nomEcran: 'Profile'
    });
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

<View>
    <TextInput value={this.state.email} onChangeText={this.handleChangeEmail} />
    <TextInput value={this.state.username} onChangeText={this.handleChangeUsername} />
    <TextInput value={this.state.firstname} onChangeText={this.handleChangeFirstname} />
    <TextInput value={this.state.lastname} onChangeText={this.handleChangeLastname} />
    <TextInput secureTextEntry={true} value={this.state.password} onChangeText={this.handleChangePassword} />
    <TextInput secureTextEntry={true} value={this.state.confirmPassword} onChangeText={this.handleChangeConfirmPassword} />
    <Button title="Retour" onPress={this.props.handleChangeScreenLogin} />
    <Button title="Valider" onPress={this.props.handleChangeScreenProfile} />
</View>