export default function Posts({ posts }) {
  return (
    <ul>
      {posts.map(({ title, description, author }) => (
        <li key={title}>
          {title}
          <br />
          {description}
          <br />
          {author}
        </li>
      ))}
    </ul>
  );
}