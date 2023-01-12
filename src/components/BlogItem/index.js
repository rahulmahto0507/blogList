import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {title, description, publishedDate} = blogData

  return (
    <li className="item-container">
      <div className="title-date-container">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem
