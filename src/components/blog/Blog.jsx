import React, { useEffect, useState } from 'react'
import Image1 from "../../assets/blog-1.svg"
import "./blog.css"


const Blog = () => {
  const [post, setPost] = useState([]);
  useEffect(()=>{
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@misrasiddharth9")
    .then(res=>res.json())
    .then((data)=>{
      console.log(data.items)
      
      setPost(data.items)
    }).catch((err)=>console.err("Failed to fetch medium blogs, err"))
  },[])

  const extractImage = (html) => {
  const match = html.match(/src="([^"]+\.jpeg)"/i);
  return match ? match[1] : null;
};


  return (
    <section className='blog container section' id="blog">
      <h2 className="section__title">Blogs</h2>

      <div className="blog__container grid">
        
        {post.slice(0,3).map((p, index)=>{
          return(
            <a
            key={p.guide || index}
            href={p.link}
            className="blog__card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="blog__card">
          
            {/* <span className="blog__category">{p.categories[0] || "Blog"}</span> */}
            <img src={extractImage(p.description) || Image1} alt={p.title} className='blog__img'/>

          </div>
          <div className="blog__details">
            <h3 className="blog__title">{p.title}</h3>
            <div className="blog__meta">
              <span>{new Date(p.pubDate).toLocaleDateString()}</span>
              <span className="blog__dot">.</span>
              <span>{p.author}</span>
            </div>
          </div>
          </a>
          )
          
})}
      </div>
    </section>
  )
}

export default Blog
