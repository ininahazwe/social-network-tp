export default class PostService {
    posts = [
        {
            id: 1,
            content: 'Salut je bois un verre au starbucks',
            user_id: 2,
            likes: 0
        },
        {
            id: 2,
            content: 'Je me promene dans le parc',
            user_id: 1,
            likes: 0
        },
        {
            id: 3,
            content: 'Je suis heureux',
            user_id: 2,
            likes: 4
        },
        {
            id: 4,
            content: 'Super, nous avons un beau cadeaux',
            user_id: 2,
            likes: 0
        }
    ]

    list(userId) {
        return this.posts.filter(post => post.user_id == userId);
    }

    get(post_id) {
        const matchingPosts = this.posts.filter(post => post.id == post_id);
        return matchingPosts.length > 0 ? matchingPosts[0] : null;
    }

    create(user_id, content) {
        if (user_id <= 0 || !content || content == '') {
            return;
        }

        const nouveauPost = {
            content: content,
            user_id: user_id,
            likes: 0
        }
        this.posts.unshift(nouveauPost);
    }

    /**
     * 
     * key = "content", "likes"
     */
    update(post_id, key, value) {
        const post = this.get(post_id);
        post[key] = value;
    }
}