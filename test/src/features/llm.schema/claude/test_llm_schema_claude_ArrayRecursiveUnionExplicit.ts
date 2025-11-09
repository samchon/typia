import typia from "typia";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_ArrayRecursiveUnionExplicit = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ArrayRecursiveUnionExplicit",
  })(typia.llm.schema<ArrayRecursiveUnionExplicit, "claude">({}));