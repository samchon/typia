import { useMDXComponents as getBlogMDXComponents } from "nextra-theme-blog";
import GiscusComments from "./src/app/blog/GiscusComments";

function formatDate(value) {
  const date = value ? new Date(value) : null;
  return Number.isNaN(date?.getTime?.()) ? null : date;
}

export function useMDXComponents(components) {
  const blogComponents = getBlogMDXComponents(components);

  return {
    ...blogComponents,
    wrapper({ children, metadata, toc }) {
      const date = formatDate(metadata?.date);
      const tags = metadata?.tags ?? [];
      const filteredToc = Array.isArray(toc) ? toc.filter((item) => item.depth <= 3) : [];
      const hasToc = filteredToc.length > 0;

      return (
        <>
          <div className={hasToc ? "typia-blog-post-layout" : undefined}>
            <div className="typia-blog-post-main">
              {metadata?.ogImage ? (
                <img
                  src={metadata.ogImage}
                  alt={metadata.title ?? "Blog cover image"}
                  className="typia-blog-hero"
                />
              ) : null}
              <h1>{metadata?.title}</h1>
              <div className="typia-blog-meta">
                {date ? (
                  <time dateTime={date.toISOString()}>{date.toLocaleDateString()}</time>
                ) : null}
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
              <GiscusComments />
            </div>
            {hasToc ? (
              <aside className="typia-blog-toc" aria-label="Table of contents">
                <div className="typia-blog-toc-inner">
                  <div className="typia-blog-toc-title">On This Page</div>
                  <nav>
                    {filteredToc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`typia-blog-toc-link typia-blog-toc-depth-${item.depth}`}
                      >
                        {item.value}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>
            ) : null}
          </div>
        </>
      );
    },
  };
}
