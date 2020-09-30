const filteredUsers = this.users.filter(user => user.username == requestedUsername);
return filteredUsers.length <= 0 ? null : filteredUsers[0];