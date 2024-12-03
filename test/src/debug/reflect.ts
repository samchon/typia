import typia, { tags } from "typia";

const m = typia.reflect.metadata<[string & tags.Format<"uuid">]>();
console.log(JSON.stringify(m.metadatas[0]?.atomics[0], null, 2));
