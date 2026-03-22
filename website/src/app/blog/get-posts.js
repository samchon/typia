import { normalizePages } from "nextra/normalize-pages";
import { getPageMap } from "nextra/page-map";

export async function getPosts() {
  const { directories } = normalizePages({
    list: await getPageMap("/blog"),
    route: "/blog",
  });
  return directories
    .filter((post) => post.name !== "index")
    .sort(
      (a, b) => new Date(b.frontMatter.date) - new Date(a.frontMatter.date),
    );
}

export async function getTags() {
  const posts = await getPosts();
  return posts.flatMap((post) => post.frontMatter?.tags ?? []);
}
