import typia from "typia";

import { ArrayRecursive } from "../structures/ArrayRecursive";

const schema = typia.llm.schema<ArrayRecursive, "3.1">({});
console.log(schema);
