import React from 'react'
import { metadata } from './../layout';
export const metadata ={
  title:"about page"
}

function Layout({children}) {
  return (
    <div>
      <div>Layout about</div>
      <div>{children}</div>
    </div>
  )
}

export default Layout
