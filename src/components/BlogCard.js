import React from 'react'
import LogoQ from '../assets/images/Q-logo.svg'

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="big-blog-card-image">
        <img src={LogoQ} alt="Logo" />
      </div>
      <div className="big-blog-card-body">
        <div className="big-blog-card-title">Matt's A Bitch</div>
        <div className="big-blog-card-text">
          This is a longer card with supporting text below to explain to the
          full extent that Matt is infact, a bitch.
        </div>
        <div className="blog-card-footer">Matt Kozak | 4/20/2022</div>
      </div>
    </div>
  )
}

export default BlogCard
