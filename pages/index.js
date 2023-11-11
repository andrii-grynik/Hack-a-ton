import Layout from "../components/Layout";
import Posts from "../components/Posts";

export default function Index({ postList, comments }) {
  return (
    <Layout>
      <h1>Here is our awesome website</h1>
      <Posts posts={postList} />
      <Posts posts={comments} />
    </Layout>
  );
}


export async function getStaticProps() {
  let postList = [
    { title: "Test1", description: "Here is the post test1!", author: "user1" },
    { title: "Test2", description: "Here is the post test2!", author: "user2" }];


  let comments = [
    { title: "Test Comment 1", description: "Here is the post test1!", author: "user1" },
    { title: "Test Comment 2", description: "Here is the post test2!", author: "user2" }];

  console.log("posts before props: ", postList);

  return {
    props: { postList, comments },
  };
}