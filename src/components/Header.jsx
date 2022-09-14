import React, { useEffect, useState } from "react"

const Posts = () => {
    const [posts, setPosts] = useState([])
    const url = process.env.REACT_APP_POST_API

    const fetchData = () => {
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setPosts(data.posts)
            })
    };

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {posts.map((post) => (
                <div className="header" key={post.author.id}>
                    <h1>{post.author.name}</h1>
                </div>
            ))}
        </>
    )
}


export default Posts