import { normalizePages } from "nextra/normalize-pages";
import { getPageMap } from "nextra/page-map";

export async function getPosts() {
  const { directories } = normalizePages({
    list: await getPageMap("/blog"),
    route: "/blog",
  });
  return directories
    .filter((post) => post.route !== "/blog" && post.frontMatter?.title)
    .sort(
      (a, b) =>
        new Date(b.frontMatter.date ?? 0).getTime() -
        new Date(a.frontMatter.date ?? 0).getTime(),
    );
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
