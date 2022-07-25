import React from 'react'

function Posts({posts}) {
    console.log(posts)
  return (
    <ul>
        {posts && posts.data.map((post)=>{
            return(<li key={post.id}>
               <a href={`post/`+ post.id}>{post.attributes.Title}</a>     
            </li>)
        }
        )}
    </ul>
  )
}

export default Posts