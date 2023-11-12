import getDriver from "./connect";

const postData = {
  imageUrl: 'imageUrl',
  title: 'some title',
  description: 'some description',
  author: {
    name: 'John Doe',
    profileImage: 'profileImageUrl',
    itemsDonated: 20,
    itemsReceived: 10,
    points: 200
  }
};

const filter = {
  available: true,
  category: "furniture"
};

export async function createPost(postData) {
  const driver = await getDriver();
  const db = driver.db("market");
  const collection = db.collection("posts");
  await collection.insertOne(postData);
}

export async function getPosts(filter) {
  const driver = await getDriver();
  const db = driver.db("market");
  const collection = db.collection("posts");
  const posts = await collection.find({ available: filter.available, category: filter.category }).toArray();
  return posts;
}

