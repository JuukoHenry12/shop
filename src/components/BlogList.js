import { Link } from "react-router-dom";

const BlogList = ({ blog, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      {blog.map((item) => (
       <div className="blog_preview" key={item.id}>
          <Link to={`/blogs/${item.id}`}>
            <h1 className="home-prev">{item.title}</h1>
            <p>{item.body}</p>
            <p>by the author:{item.author}</p>
            </Link>
          </div>
      ))}
    </div>
  );
};

export default BlogList;
