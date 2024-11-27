import typia from "typia";

import { ArrayRecursive } from "../structures/ArrayRecursive";

const $defs: Record<string, any> = {};
const schema = typia.llm.schema<
  ArrayRecursive,
  "3.1",
  {
    reference: true;
  }
>($defs);
console.log($defs, schema);
