import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import ServiceContext from '../ServiceContext';
import { Container } from '../Global.elements';
import { Introduction } from './Login.elements';
import { Trait, Bonjour, Username, Feed, Nav } from './Profile.elements';

export default class Friends extends React.Component {

    static contextType = ServiceContext;

    state = {
        listOfFollowees: []
    }

    componentDidMount() {
        this.setState({
            listOfFollowees: this.context.userService.listFollowees(this.props.currentUser.id)
        })
    }

    render() {
        let listOfFollowees = [];

        for(const user of this.state.listOfFollowees) {
            const element = (
                <Feed>
                    <Nav>
                        <Text>{user.firstname} {user.lastname}</Text>
                        <TouchableOpacity style={styles.btnlog3} title="Unfollow">
                            <Text style={styles.textbtn}>Unfollow</Text>
                        </TouchableOpacity>
                    </Nav>
                </Feed>
            );
            listOfFollowees.push(element);
        }

        return (
            <Container>
                <Bonjour>Voici</Bonjour>
                <Username>Vos amis</Username>
                <Introduction>Vous trouverez ici la liste de vos amis avec qui vous partagez des affinités</Introduction>
                <TouchableOpacity style={styles.btnlog2} title="Retour"  onPress={this.props.changeScreen('Profile')}>
                  <Text style={styles.textbtn}>Retour</Text>
                </TouchableOpacity>
                <Trait></Trait>
                {listOfFollowees}
            </Container>
          );
    }
}

const styles = StyleSheet.create({
    btnlog3: {
      backgroundColor: '#8093f1',
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
      }
  });
