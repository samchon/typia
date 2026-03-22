import Link from "next/link";
import { getPosts, getTags } from "./get-posts";

export const metadata = {
  title: "Blog – Typia",
};

export default async function BlogIndex() {
  const posts = await getPosts();
  const tags = await getTags();
  const tagCounts = Object.create(null);
  for (const tag of tags) {
    tagCounts[tag] = (tagCounts[tag] ?? 0) + 1;
  }

  return (
    <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
      <h1>Blog</h1>
      {Object.keys(tagCounts).length > 0 && (
        <nav style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", marginBottom: "2rem" }}>
          {Object.entries(tagCounts).map(([tag, count]) => (
            <Link
              key={tag}
              href={`/blog/tags/${tag}`}
              style={{
                fontSize: "0.85rem",
                padding: "0.2rem 0.6rem",
                borderRadius: "4px",
                background: "rgba(128,128,128,0.15)",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {tag} ({count})
            </Link>
          ))}
        </nav>
      )}
      {posts.map((post) => {
        const fm = post.frontMatter ?? {};
        const date = fm.date
          ? new Date(fm.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : null;
        return (
          <article key={post.route} style={{ marginBottom: "2rem", paddingBottom: "2rem", borderBottom: "1px solid rgba(128,128,128,0.2)" }}>
            <h2 style={{ margin: 0 }}>
              <Link href={post.route} style={{ color: "inherit", textDecoration: "none" }}>
                {fm.title ?? post.title}
              </Link>
            </h2>
            <div style={{ fontSize: "0.85rem", color: "#888", marginTop: "0.4rem" }}>
              {date && <time>{date}</time>}
              {fm.author && <span> · {fm.author}</span>}
            </div>
            {fm.description && (
              <p style={{ marginTop: "0.5rem", color: "#aaa" }}>{fm.description}</p>
            )}
          </article>
        );
      })}
      {posts.length === 0 && <p style={{ color: "#888" }}>No posts yet.</p>}
    </div>
  );
}
