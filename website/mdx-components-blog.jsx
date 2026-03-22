import { useMDXComponents as getBlogMDXComponents } from "nextra-theme-blog";

function formatDate(value) {
  const date = value ? new Date(value) : null;
  return Number.isNaN(date?.getTime?.()) ? null : date;
}

export function useMDXComponents(components) {
  const blogComponents = getBlogMDXComponents(components);

  return {
    ...blogComponents,
    wrapper({ children, metadata }) {
      const date = formatDate(metadata?.date);
      const tags = metadata?.tags ?? [];

      return (
        <>
          {metadata?.ogImage ? (
            <img
              src={metadata.ogImage}
              alt={metadata.title ?? "Blog cover image"}
              className="typia-blog-hero"
            />
          ) : null}
          <h1>{metadata?.title}</h1>
          <div className="typia-blog-meta">
            {date ? <time dateTime={date.toISOString()}>{date.toLocaleDateString()}</time> : null}
            {metadata?.author ? <span>{metadata.author}</span> : null}
            {metadata?.devtoUrl ? (
              <a href={metadata.devtoUrl} target="_blank" rel="noreferrer">
                Original on DEV
              </a>
            ) : null}
          </div>
          {tags.length ? (
            <div className="typia-blog-tags">
              {tags.map((tag) => (
                <span key={tag}>#{tag}</span>
              ))}
            </div>
          ) : null}
          {children}
        </>
      );
    },
  };
}
