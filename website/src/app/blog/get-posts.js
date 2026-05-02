import blogMetadata from "../../../build/blog-metadata";

const { readBlogPost, readBlogPosts } = blogMetadata;

export async function getPosts() {
  return readBlogPosts();
}

export async function getTagCounts() {
  const tags = new Map();
  for (const post of await getPosts()) {
    for (const tag of post.frontMatter.tags ?? []) {
      tags.set(tag, (tags.get(tag) ?? 0) + 1);
    }
  }
  return [...tags.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([name, count]) => ({ count, name }));
}

export async function getPostsByTag(tag) {
  return (await getPosts()).filter((post) => (post.frontMatter.tags ?? []).includes(tag));
}

export async function getPostBySlug(slug) {
  return readBlogPost(slug);
}
