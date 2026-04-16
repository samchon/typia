const fs = require("fs");
const path = require("path");

const CONTENT_DIR = [
  path.join(process.cwd(), "src", "content", "blog"),
  path.join(process.cwd(), "website", "src", "content", "blog"),
  path.join(__dirname, "..", "src", "content", "blog"),
].find((candidate) => fs.existsSync(candidate))
  ?? path.join(process.cwd(), "src", "content", "blog");
const FRONTMATTER_PATTERN = /^---\r?\n([\s\S]*?)\r?\n---/;
const DESCRIPTION_MAX_LENGTH = 180;

const decodeHtmlEntities = (value) =>
  value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'")
    .replaceAll("&#39;", "'");

const collapseWhitespace = (value) => value.replace(/\s+/g, " ").trim();

const trimDescription = (value) => {
  if (value.length <= DESCRIPTION_MAX_LENGTH) return value;
  const sliced = value.slice(0, DESCRIPTION_MAX_LENGTH - 3);
  const sentenceBoundary = Math.max(
    sliced.lastIndexOf(". "),
    sliced.lastIndexOf("! "),
    sliced.lastIndexOf("? "),
  );
  if (sentenceBoundary > 96) return sliced.slice(0, sentenceBoundary + 1).trim();
  const boundary = sliced.lastIndexOf(" ");
  return `${(boundary > 96 ? sliced.slice(0, boundary) : sliced).trim()}...`;
};

const cleanText = (value) =>
  trimDescription(
    collapseWhitespace(
      decodeHtmlEntities(value)
        .replace(/\{\/\*[\s\S]*?\*\/\}/g, " ")
        .replace(/`([^`]+)`/g, "$1")
        .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
        .replace(/<\/?[^>]+>/g, " ")
        .replace(/[*_~>#]+/g, " "),
    ),
  );

const looksCodeLike = (value) =>
  /https?:\/\//i.test(value) ||
  /(^| )\/\/ /.test(value) ||
  /\bimport\s+\w|\bexport\s+(?:function|const|namespace)|\binterface\s+\w|\bconst\s+\w+\s*=/.test(
    value,
  ) ||
  /[{};]/.test(value);

const isUsableDescription = (value) => {
  if (!value || value.length < 40) return false;
  if (looksCodeLike(value)) return false;
  if (/^(outline|preface|summary)\b/i.test(value)) return false;
  return true;
};

const stripFrontmatter = (content) => content.replace(FRONTMATTER_PATTERN, "").trim();

const parseFrontmatter = (content) => {
  const match = content.match(FRONTMATTER_PATTERN);
  if (!match) return {};

  const metadata = {};
  let currentKey = null;
  for (const rawLine of match[1].split(/\r?\n/)) {
    if (!rawLine.trim()) continue;

    const listMatch = rawLine.match(/^\s*-\s+(.*)$/);
    if (listMatch && currentKey) {
      metadata[currentKey].push(listMatch[1].trim().replace(/^"|"$/g, ""));
      continue;
    }

    const keyValueMatch = rawLine.match(/^\s*([A-Za-z0-9_]+):\s*(.*)$/);
    if (!keyValueMatch) continue;

    const [, key, value] = keyValueMatch;
    if (value === "") {
      metadata[key] = [];
      currentKey = key;
    } else {
      metadata[key] = value.trim().replace(/^"|"$/g, "");
      currentKey = key;
    }
  }
  return metadata;
};

const extractDescriptionFromBody = (content) => {
  const blocks = stripFrontmatter(content)
    .replace(/```[\s\S]*?```/g, "\n\n")
    .split(/\r?\n\s*\r?\n/);

  for (const block of blocks) {
    const trimmed = block.trim();
    if (!trimmed) continue;
    if (/^(import|export)\s/.test(trimmed)) continue;
    if (/^#{1,6}\s/.test(trimmed)) continue;
    if (/^>/.test(trimmed)) continue;
    if (/^[-*+]\s/.test(trimmed)) continue;
    if (/^\d+\.\s/.test(trimmed)) continue;
    if (/^<[^>]+>/.test(trimmed)) continue;
    if (/^\{[\s\S]*\}$/.test(trimmed)) continue;

    const sentence = cleanText(trimmed);
    if (!isUsableDescription(sentence)) continue;
    return sentence;
  }
  return "";
};

const readBlogPosts = () =>
  fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => {
      const fullPath = path.join(CONTENT_DIR, file);
      const source = fs.readFileSync(fullPath, "utf8");
      const frontMatter = parseFrontmatter(source);
      const slug = file.replace(/\.mdx?$/, "");
      const explicitDescription = cleanText(frontMatter.description ?? "");
      const description = isUsableDescription(explicitDescription)
        ? explicitDescription
        : extractDescriptionFromBody(source) || explicitDescription;
      return {
        file,
        slug,
        route: `/blog/${slug}`,
        frontMatter: {
          ...frontMatter,
          description,
        },
      };
    })
    .filter((post) => post.frontMatter.title)
    .sort(
      (a, b) =>
        new Date(b.frontMatter.date ?? 0).getTime() -
        new Date(a.frontMatter.date ?? 0).getTime(),
    );

const readBlogPost = (slug) => readBlogPosts().find((post) => post.slug === slug) ?? null;

module.exports = {
  CONTENT_DIR,
  parseFrontmatter,
  readBlogPost,
  readBlogPosts,
};
