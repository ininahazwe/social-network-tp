export default class UserService {
    /**
     * 
     * CREATE
     * RETRIEVE
     * UPDATE
     */
    users = [
        {
            id: 1,
            firstname: 'Sophie',
            lastname: 'Tagada',
            username: 'soso',
            email: 'sophie@tag.com',
            password: 'sophie',
            follow_user_ids: []
        },
        {
            id: 2,
            firstname: 'Kevin',
            lastname: 'Burt',
            username: 'kevin.burt',
            email: 'kevin@burt.com',
            password: 'kevin',
            follow_user_ids: [1]
        },
        {
            id: 3,
            firstname: 'Jeremy',
            lastname: 'Cross',
            username: 'jeremy.cross',
            email: 'jeremy@cross.com',
            password: 'jeremy',
            follow_user_ids: [1, 2]
        }
    ];

    list() {
        return this.users;
    }

    authorize(username, password) {
        const user = this.get(username);
        return user == null || user.password != password ? null : user; 
    }

    get(requestedUsername) {
        const filteredUsers = this.users.filter(user => user.username == requestedUsername);
        return filteredUsers.length <= 0 ? null : filteredUsers[0];
    }

    create(firstname, lastname, email, username, password) {
        const foundUser = this.get(username);
        if (foundUser == null) {
            const newUser = {
                firstname: firstname,
                lastname: lastname,
                username: username,
                email: email,
                password: password
            };
            this.users.push(newUser);
            return newUser;
        }
        return null;
    }

    /**
     * 
     * key = "email", "firstname", "lastname"
     */
    update(username, key, value) {
        const user = this.get(username);
        if (key === 'username') {
            return;
        }
        user[key] = value;
    }

    getUserById(idToMatch) {
        const matchingUsersToUserId = this.users.filter(user => user.id == idToMatch);
        if (matchingUsersToUserId.length <= 0) {
            return null;
        }
        const user = matchingUsersToUserId[0];
        return user;
    }

    follow(userIdA, userIdB) {
        const userA = this.getUserById(userIdA);
        userA.follow_user_ids.push(userIdB);
    }

    unfollow(userIdA, userIdB) {
        const userA = this.getUserById(userIdA);
        userA.follow_user_ids = userA.follow_user_ids.filter(chiffre => chiffre != userIdB);
    }

    listFollowees(userId) {
        const user = this.getUserById(userId);
        return user.follow_user_ids.map(chiffre => this.getUserById(chiffre));
    }
}