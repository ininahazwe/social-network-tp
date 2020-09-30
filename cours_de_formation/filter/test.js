for(const user of this.users) {
    if (user.username == requestedUsername) {
        return user;
    }
}
return null;