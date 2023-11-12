import fs from 'fs';
import path from 'path';
import { createPost,getPosts } from '../../database/posts';
import multer from 'multer';

export const config = {
  api: {
    bodyParser: false,
  },
};

// Check if file extension is allowed
const isValid = (file) => {
  const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.webp'];
  const originalExt = path.extname(file.originalname).toLowerCase();
  return allowedExtensions.includes(originalExt);
};

// Configure storage and customize filename
const storage = multer.memoryStorage();

// Configure Multer upload storage and filter
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (isValid(file)) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
});

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {    
      const category = req.query.category;
      console.log("category param: ", category);
      const posts = await getPosts(category);
      res.status(200).json(posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  else {
    if (req.method !== 'POST') {
      return res.status(405).end(); // Method Not Allowed
    }
  
    try {
      // Assuming 'image' is the field name
      upload.single('image')(req, res, async (err) => {
        if (err) {
          console.error('Error uploading image:', err);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
  
        const file = req.file;
        console.log(req.file);
        const { title, description } = req.body;
        const uploadDir = path.join(process.cwd(), 'public/images'); // Update the path to your public folder
  
        const postData = {
          imageUrl: `/images/${file.originalname}`,
          title: title,
          description: description,
          available: true,
          category: "other",
          author: {
            id: 1,
            name: "HARDCODED",
            profileImage: "HARDCODED",
            itemsDonated: 20,
            itemsReceived: 12,
            points: 200
          }
        };
  
        // Create the 'public/images' directory if it doesn't exist
        if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir, { recursive: true });
        }
  
        const filePath = path.join(uploadDir, file.originalname);
        createPost(postData);
        fs.writeFileSync(filePath, file.buffer);
  
        res.status(201).json({ filePath: file.originalname });
      });
    } catch (error) {
      console.error('Error uploading image:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
}

