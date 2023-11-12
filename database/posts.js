import getDriver from "./connect";

const postData = {
  imageUrl: 'imageUrl',
  title: 'some title',
  description: 'some description',
  available: true,
  category: 'furniture',
  author: {
    id: 1,
    name: 'John Doe',
    profileImage: 'profileImageUrl',
    itemsDonated: 20,
    itemsReceived: 10,
    points: 200
  }
};

export async function createPost(postData) {
  const driver = await getDriver();
  const db = driver.db("market");
  const collection = db.collection("posts");
  await collection.insertOne(postData);
}

export async function getPosts(category) {
  const driver = await getDriver();
  const db = driver.db("market");
  const collection = db.collection("posts");
  if (category) {
    return await collection.find({ available: true, category: category }).toArray();
  }
  return await collection.find({ available: true }).toArray();
}

export async function getUsersPosts(userId) {
  const id = Number(userId);
  const driver = await getDriver();
  const db = driver.db("market");
  const collection = db.collection("posts");
  return await collection.find({ "author.id": id }).toArray();
}