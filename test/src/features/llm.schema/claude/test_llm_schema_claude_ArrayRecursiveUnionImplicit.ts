import typia from "typia";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_ArrayRecursiveUnionImplicit = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ArrayRecursiveUnionImplicit",
  })(typia.llm.schema<ArrayRecursiveUnionImplicit, "claude">({}));