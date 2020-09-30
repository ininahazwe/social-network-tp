import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Button } from 'react-native';
import ServiceContext from '../ServiceContext';
import { Container } from '../Global.elements';
import { LoginInput } from './Login.elements';
import { Bonjour, Username, Nav, Feed, Likes, Trait } from './Profile.elements';

export default class Profile extends React.Component {

    static contextType = ServiceContext;

    // 1. Pas de state = pas de vue (l'écran ne va pas se rafraichir)
    state = {
        listeDePosts: [],
        postText: ''
    }

    // 2. React execute componentDidMount lors de l'initialisation
    componentDidMount() {
        this.setState({
            listeDePosts: this.context.postService.list(this.props.currentUser.id)
        })
    }

    // 3. Method factory (personnalisé la méthode avec un post)
    handleLike = (post) => () => {
        this.context.postService.update(post.id, 'likes', post.likes + 1);
        this.setState({
            listeDePosts: this.context.postService.list(this.props.currentUser.id)
        });
    }

    handleChangePostText = (text) => {
        this.setState({
            postText: text
        })
    }

    handlePost = () => {
        this.context.postService.create(this.props.currentUser.id, this.state.postText);
        this.setState({
            listeDePosts: this.context.postService.list(this.props.currentUser.id)
        });
    }

    // 4. Render est exécuté plein de fois par React (autant de fois qu'il le faut)
    // DONC - Pas d'appel aux API ici = risque de bannissement, couts énormes
    render() {
        let listeDesTagsPourLesPosts = [];
        for (const post of this.state.listeDePosts) {
            const element = (
                <Feed>
                    <Likes>{post.likes} Like</Likes>
                    <Nav>
                        <Text>{post.content}</Text>
                        <TouchableOpacity style={styles.btnlog2} title="Liker"  onPress={this.handleLike(post)}>
                        <Text style={styles.textbtn1}>Liker</Text>
                        </TouchableOpacity>
                    </Nav>
                </Feed>           
            );
            listeDesTagsPourLesPosts.push(element);
        }

        return (

            <Container>
                <Bonjour>Bonjour</Bonjour>
                <Username>{this.props.currentUser.firstname} !</Username>
                <Nav>
                    <TouchableOpacity style={styles.btnlog3} title="Voir mes amis"  onPress={this.props.changeScreen('Friends')}>
                    <Text style={styles.textbtn}>Voir mes amis</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnlog2} title="Déconnexion"  onPress={this.props.changeScreen('Login')}>
                    <Text style={styles.textbtn1}>Déconnexion</Text>
                    </TouchableOpacity>
                </Nav>
                <Nav>
                    <LoginInput value={this.state.postText} onChangeText={this.handleChangePostText} />
                    <TouchableOpacity style={styles.btnlog} title="Poster"  onPress={this.handlePost}>
                    <Text style={styles.textbtn}>Poster</Text>
                    </TouchableOpacity>
                </Nav>
                <Trait></Trait>
                {listeDesTagsPourLesPosts}
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
      },
    btnlog: {
        backgroundColor: '#006d77',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: 'auto',
        borderRadius: 5,
        margin: 5,
      },
  });

