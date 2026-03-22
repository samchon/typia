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
      const headings = Array.isArray(toc) ? toc.filter((item) => Number(item.depth) <= 3) : [];
      const hasToc = headings.length > 0;
      const groups = [];
      let currentGroup = null;
      for (const item of headings) {
        if (Number(item.depth) <= 2) {
          currentGroup = {
            ...item,
            children: [],
          };
          groups.push(currentGroup);
          continue;
        }
        if (currentGroup) currentGroup.children.push(item);
        else
          groups.push({
            ...item,
            children: [],
          });
      }

      return (
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
            <GiscusComments />
          </div>
          {hasToc ? (
            <aside className="typia-blog-toc" aria-label="Table of contents">
              <div className="typia-blog-toc-inner">
                <div className="typia-blog-toc-title">On This Page</div>
                <nav aria-label="Table of contents">
                  <ul className="typia-blog-toc-list">
                    {groups.map((item) => (
                      <li key={item.id} className="typia-blog-toc-item">
                        <a
                          href={`#${item.id}`}
                          className={`typia-blog-toc-link typia-blog-toc-depth-${item.depth}`}
                        >
                          {item.value}
                        </a>
                        {item.children.length ? (
                          <ul className="typia-blog-toc-sublist">
                            {item.children.map((child) => (
                              <li key={child.id} className="typia-blog-toc-subitem">
                                <a
                                  href={`#${child.id}`}
                                  className={`typia-blog-toc-link typia-blog-toc-depth-${child.depth}`}
                                >
                                  {child.value}
                                </a>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>
          ) : null}
        </div>
      );
    },
  };
}
