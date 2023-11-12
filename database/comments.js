import getDriver from "./connect";

const commentData = {
  postId: 1,
  text: 'some comment text',
  author: {
    id: 1,
    name: 'John Doe',
    profileImage: 'profileImageUrl',
    itemsDonated: 20,
    itemsReceived: 10,
    points: 200
  }
};

export async function createComment(commentData) {
  const driver = await getDriver();
  const db = driver.db("market");
  const collection = db.collection("comments");
  await collection.insertOne(commentData);
}

export async function getComments(postId) {
  const driver = await getDriver();
  const db = driver.db("market");
  const collection = db.collection("comments");
  return await collection.find({ postId }).toArray();
}
