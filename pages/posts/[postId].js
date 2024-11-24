import { useRouter } from "next/router";
import { posts } from "../../data/posts";

export default function PostPage() {
  const router = useRouter();
  const { postId } = router.query; // postId will now be a string

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return <p>Post not found.</p>;
  }

  const PostContent = post.content;

  return (
    <div>
      <h1>{post.title}</h1>
      <PostContent />
    </div>
  );
}
