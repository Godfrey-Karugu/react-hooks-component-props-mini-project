import React from 'react'
import Article from './Article'

function ArticleList(props) {
  
  return (
    <main>
     {props.blogData.map((post)=>(
      <Article key={post.id} post={post}/>
     ))}
    </main>
  )
}

export default ArticleList