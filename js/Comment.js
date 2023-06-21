class Comment{
    post_id = '';
    user_id = '';
    content = '';
    api_url = 'https://636a3d3fb10125b78fd4d1ca.mockapi.io';

    create(){
        let data = {
            post_id: this.post_id,
            user_id: this.user_id,
            content: this.content
        }

        data = JSON.stringify(data);

        fetch(this.api_url + '/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        })
        .then(response => response.json())
        .then(data => {})
    }


    async get(post_id){
        let api_url = this.api_url + '/comments';

        const response = await fetch(api_url);
        const data = await response.json();
        let post_comments = [];

        let i = 0;
        data.forEach(comment => {
            if (comment.post_id === post_id){  // Ako je post_id u komentaru jednak post_id koji smo poslali u zagradama
                post_comments[i] = comment;
                i++;
            }
        });

        return post_comments;
    }
}