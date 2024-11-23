import React, { useEffect, useState } from 'react'

const Frontend = () => {
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        try {
            const res = await fetch('http://Backend/api/blog/data', {
                method: 'GET',
                headers: {
                    'Content-Type':'application/json'
                }
            })
            const data = await res.json();
            if(res.ok){
                setBlog(data.blog);
            } else{
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <h1>{blog?.title}</h1>
            <p>{blog?.time}</p>
            <hr />
            <p>{blog?.content}</p>
        </>
    )
};

export default Frontend