import { useRouter } from "next/router";
import Link from "next/link";
import { posts } from "../../../data/posts";

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;

  const filteredPosts = posts.filter((post) =>
    post.category.includes(category)
  );

  return (
    <div>
      <h1>Posts in "{category}"</h1>
      {filteredPosts.length > 0 ? (
        <ul>
          {filteredPosts.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts found for this category.</p>
      )}
    </div>
  );
}
