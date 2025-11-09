import typia from "typia";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_ObjectRecursive = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ObjectRecursive",
  })(typia.llm.schema<ObjectRecursive, "claude">({}));