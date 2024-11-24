import Link from "next/link";
import { posts } from "../../data/posts";

export default function AllPostsPage() {
  return (
    <div>
      <h1>All Blog Posts</h1>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
}
// The AllPostsPage component is a simple page that lists all the blog posts. It uses the posts array from data/posts.js to generate a list of links to each post. The links are created using the Link component from Next.js, which allows for client-side navigation between pages. The href attribute of the Link component specifies the URL of the post page, which includes the post ID as a dynamic route parameter.
