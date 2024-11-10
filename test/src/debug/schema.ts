import typia from "typia";

import { UltimateUnion } from "../structures/UltimateUnion";

const schema = typia.llm.schema<UltimateUnion, "chatgpt">();
console.log(JSON.stringify(schema, null, 2));
