import Link from "next/link";
import { categories } from "../../data/posts";

export default function CategoriesPage() {
  return (
    <div>
      <h1>Blog Categories</h1>
      {categories.length > 0 ? (
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <Link href={`/categories/${category}`}>{category}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No categories available.</p>
      )}
    </div>
  );
}
