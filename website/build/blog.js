const fs = require("fs");
const path = require("path");

const { readBlogPosts } = require("./blog-metadata");

const OUTPUT_DIR = path.join(__dirname, "..", "public", "blog");
const SITE_URL = "https://typia.io";

const escapeXml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

const posts = readBlogPosts().map((post) => ({
  title: post.frontMatter.title ?? post.slug,
  description: post.frontMatter.description ?? "",
  date: post.frontMatter.date ?? new Date().toISOString().slice(0, 10),
  slug: post.slug,
}));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Typia Blog</title>
    <link>${SITE_URL}/blog/</link>
    <description>Engineering notes, releases, and deep dives from Typia.</description>
    <language>en</language>
${posts
  .map(
    (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${post.slug}/</link>
      <guid>${SITE_URL}/blog/${post.slug}/</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.description)}</description>
    </item>`,
  )
  .join("\n")}
  </channel>
</rss>
`;

fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.writeFileSync(path.join(OUTPUT_DIR, "rss.xml"), xml);
