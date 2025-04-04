import typia from "typia";

import { TypeTagRange } from "../structures/TypeTagRange";

console.log(
  JSON.stringify(typia.llm.schema<TypeTagRange, "gemini">(), null, 2),
);
