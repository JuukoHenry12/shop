import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch(
    "http://localhost:8000/blog/" + id
  );

  return (
    <div className="blog_details">
      {isPending && <div>LOADING....</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>author by : {blog.author}</p>
          <div><p>{blog.body}</p></div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
