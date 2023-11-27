import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/Card'
const Posts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                console.log(res.data);
                setPosts(res.data);
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <div className="container">
                {posts.map((item,i) => (
                   <Card data={item} key={i} />
                ))}
            </div>

        </>
    )
}

export default Posts
