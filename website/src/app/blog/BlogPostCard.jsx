import Link from "next/link";

function formatDate(date) {
  const value = date ? new Date(date) : null;
  return Number.isNaN(value?.getTime?.()) ? null : value.toLocaleDateString();
}

export default function BlogPostCard({ post }) {
  const { frontMatter } = post;
  const tags = frontMatter.tags ?? [];
  const date = formatDate(frontMatter.date);

  return (
    <Link href={post.route} className="typia-blog-card">
      <img
        src={frontMatter.ogImage ?? "/og.jpg"}
        alt={frontMatter.title ?? "Blog cover image"}
        className="typia-blog-card-image"
      />
      <div className="typia-blog-card-body">
        <h2 className="typia-blog-card-title">{frontMatter.title}</h2>
        {frontMatter.description ? (
          <p className="typia-blog-card-description">{frontMatter.description}</p>
        ) : null}
        {tags.length ? (
          <div className="typia-blog-card-tags">
            {tags.slice(0, 4).map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
        ) : null}
        <div className="typia-blog-card-meta">
          {date ? <span>{date}</span> : null}
          {frontMatter.author ? <span>{frontMatter.author}</span> : null}
        </div>
      </div>
    </Link>
  );
}
