import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";

export const test_llm_schema_claude_ObjectRecursive = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ObjectRecursive",
  })(typia.llm.schema<ObjectRecursive, "claude">({}));
