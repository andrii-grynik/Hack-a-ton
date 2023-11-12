import Layout from "../components/Layout";
import Posts from "../components/Posts";

export default function Index({ postList, comments }) {
  return (
    <Layout>
      <h1>Here is our awesome website</h1>
      <Posts posts={postList} />
      {/* <Posts posts={comments} /> */}
    </Layout>
  );
}


export async function getStaticProps() {
  let comments = [
    { author: "user3", details: "I like this!",time: "3 days ago"  },
    { author: "user4", details: "Where can I collect this item from?", time: "4 mins ago" }];

    let comments1 = [
      { author: "user3", details: "I like this!",time: "3 days ago"  }];

  let postList = [
    { title: "Free Plastic!", description: "I have lots of free Plastic! Feel free to come collect it!", category: "Plastics", author: "user1", comments: comments },
    { title: "Free Food!", description: "I have lots of free food! Feel free to come collect it!", category: "Food", author: "user2" },
    { title: "Free Food!", description: "I have lots of free food! Feel free to come collect it!", category: "Food", author: "user2",comments: comments1 }];


 

  console.log("posts before props: ", postList);

  return {
    props: { postList, comments },
  };
}