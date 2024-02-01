import React from 'react'
import { useRouter } from 'next/router';

function PostId() {
    const route = useRouter();
  return (
    <div>
        <h1>{route.query.postId}</h1>
    </div>
  )
}

export default PostId
