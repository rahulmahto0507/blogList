import {Component} from 'react'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  render() {
    const {blogsList} = this.props
    return (
      <ul className="blog-list-container">
        {blogsList.map(item => (
          <BlogItem blogData={item} key={item.id} />
        ))}
      </ul>
    )
  }
}

export default BlogList
