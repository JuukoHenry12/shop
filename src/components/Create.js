import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending,setisPending]=useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    const newblog = { title, body, author };
    setIsPending(true)

    fetch("http://localhost:8000/blog", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newblog),
    }).then(()=>{
      
        console.log("blog added")
        setisPending(false)
    });
  };
  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="blog title">Blog title:</label>
        <p>
          <input
            type="text"
            required
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </p>
        <label htmlFor="blog title">Blog Body:</label>
        <p>
          <textarea
            name="body"
            id=""
            cols="30"
            rows="6"
            required
            value={body}
            onChange={(event) => setBody(event.target.value)}
          ></textarea>
        </p>
        <label htmlFor="author">Author by:</label>
        <p>
          <select
            name="author"
            id=""
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          >
            <option value="henry">henry</option>
            <option value="derrick">derrick</option>
            <option value="morsh">hmorsh</option>
          </select>
        </p>
        {!isPending && <button >submit</button>} 
        {isPending && <button >Add blog ..</button>} 
      </form>
    </div>
  );
};

export default Create;
