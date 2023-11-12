import Layout from "../components/Layout";
import Posts from "../components/Posts";

export default function Index({ postList, comments }) {
  return (
    <Layout>
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
    { title: "Free Plastic!", description: "I have lots of free Plastic! Feel free to come collect it!", category: "Plastics", author: "user1", status:"false", comments: comments },
    { title: "Free Food!", description: "I have lots of free food! Feel free to come collect it!", category: "Food", author: "user2", status:"true" },
    { title: "Free Food!", description: "I have lots of free food! Feel free to come collect it!", category: "Food", author: "user2", status:"true",comments: comments1 }];

  //get all Post
    //map each post
      //get Comment for each post

 

  console.log("posts before props: ", postList);

  return {
    props: { postList, comments },
  };
}