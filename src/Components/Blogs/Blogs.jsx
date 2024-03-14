import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs,setBlogs]=useState([])

    useEffect(()=>{
        fetch('fake.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div>
            <h2 className="text-3xl text-center mt-3">Blogs:{blogs.length} </h2>
        </div>
    );
};

export default Blogs;