import Link from "next/link";
import { getPosts, getTags } from "../../get-posts";

export async function generateStaticParams() {
  const tags = await getTags();
  return [...new Set(tags)].map((tag) => ({ tag }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  return { title: `"${decodeURIComponent(params.tag)}" posts – Typia Blog` };
}

export default async function TagPage(props) {
  const params = await props.params;
  const tag = decodeURIComponent(params.tag);
  const posts = await getPosts();
  const filtered = posts.filter((p) => p.frontMatter?.tags?.includes(tag));

  return (
    <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
      <h1>Tag: {tag}</h1>
      <p><Link href="/blog">← All posts</Link></p>
      {filtered.map((post) => {
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
    </div>
  );
}
