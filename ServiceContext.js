import React from 'react';
import UserService from './services/UserService';
import PostService from './services/PostService';

export default React.createContext({
    userService: new UserService(),
    postService: new PostService()
});