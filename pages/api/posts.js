import { createPost, getPosts } from "../../database/posts";

export default async function handler(req, res) {
  if (req.method === "GET") {
    console.log('fsadsfdas', req.query);
    try {
      const posts = await getPosts(req.query);
      res.status(200).json(posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else if (req.method === "POST") {
    try {
      await createPost(req.body);
      res.status(201).json({ message: "Post created successfully" });
    } catch (error) {
      console.error("Error creating post:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
