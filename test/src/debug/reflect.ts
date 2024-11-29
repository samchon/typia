import typia, { tags } from "typia";

const m = typia.reflect.metadata<[string & tags.Format<"uuid">]>();
console.log(JSON.stringify(m, null, 2));
