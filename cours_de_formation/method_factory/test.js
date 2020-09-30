/**
 * Version 1
 */
handleChangeScreen = (pageEnQuestion) => () => {
    this.setState({
        nomEcran: pageEnQuestion
    });
}

handleChangeText = (nomDeLaVariable) => (text) => {
    this.setState({
        [nomDeLaVariable]: text
    });
}

<View>
    <TextInput value={this.state.email} onChangeText={this.handleChangeText('email')} />
    <TextInput value={this.state.username} onChangeText={this.handleChangeText('username')} />
    <TextInput value={this.state.firstname} onChangeText={this.handleChangeText('firstname')} />
    <TextInput value={this.state.lastname} onChangeText={this.handleChangeText('lastname')} />
    <TextInput secureTextEntry={true} value={this.state.password} onChangeText={this.handleChangeText('password')} />
    <TextInput secureTextEntry={true} value={this.state.confirmPassword} onChangeText={this.handleChangeText('confirmPassword')} />
    <Button title="Retour" onPress={this.props.changeScreen('Login')} />
    <Button title="Valider" onPress={this.props.changeScreen('Profile')} />
</View>