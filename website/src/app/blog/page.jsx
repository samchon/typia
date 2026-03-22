import Link from "next/link";

import BlogPostCard from "./BlogPostCard";
import { getPosts, getTagCounts } from "./get-posts";

export const metadata = {
  title: "Blog",
  description: "Engineering notes, releases, and deep dives from Typia.",
};

export default async function BlogPage() {
  const [posts, tags] = await Promise.all([getPosts(), getTagCounts()]);

  return (
    <>
      <h1>Typia Blog</h1>
      <p>
        Release notes, engineering deep dives, and practical articles about typia, TypeScript,
        validators, schemas, and AI tooling.
      </p>
      {tags.length ? (
        <p>
          Browse by tag:{" "}
          {tags.map((tag, index) => (
            <span key={tag.name}>
              {index ? " · " : ""}
              <Link href={`/blog/tags/${encodeURIComponent(tag.name)}`}>
                {tag.name} ({tag.count})
              </Link>
            </span>
          ))}
        </p>
      ) : null}
      <div className="typia-blog-grid">
        {posts.map((post) => (
          <BlogPostCard key={post.route} post={post} />
        ))}
      </div>
    </>
  );
}
