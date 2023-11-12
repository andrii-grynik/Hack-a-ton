// import { createComment, getComments } from "../../database/comments";

// export default async function handler(req, res) {
//   if (req.method === "GET") {
//     try {
//       const posts = await getComments('6550315a8aa1508446b1a3af');
//       res.status(200).json(posts);
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   } else if (req.method === "POST") {
//     try {
//       await createComment(req.body);
//       res.status(201).json({ message: "Post created successfully" });
//     } catch (error) {
//       console.error("Error creating post:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   } else {
//     res.status(405).json({ error: "Method Not Allowed" });
//   }
// }

import { getComments } from "../../database/comments";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const postId = req.params.postId;
    try {
      const posts = await getComments(postId);
      res.status(200).json(posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}