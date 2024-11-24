import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Blog</h1>
      <div className="flex flex-col">
        <Link href="/posts">View All Posts</Link>
        <Link href="/categories">View Categories</Link>
      </div>
    </div>
  );
}
