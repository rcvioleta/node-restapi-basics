exports.getPosts = (req, res) => {
    res.status(200).json({
        posts: [
            {title: 'The Hunting', author: 'Pysco'},
            {title: 'Go grow glow foods', author: 'Adam Sandler'}
        ]
    })
}

exports.createPost = (req, res) => {
    const title = req.body.title
    const author = req.body.author
    res.status(200).json({
        message: 'Successfully created post',
        post: {
            id: new Date().toISOString(), 
            title: title, 
            author: author
        }
    })
}