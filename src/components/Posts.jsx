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
    }, [])

    return (
        <>
            {posts.map((post) => (
                <div className="post" key={post.id}>
                    <h1>{post.title}</h1>
                    <section
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    ></section>
                </div>
            ))}
        </>
    )
}


export default Posts